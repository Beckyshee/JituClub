import { Request, Response } from "express";
import mssql from "mssql";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import { sqlConfig } from "../config/sqlConfig";
import jwt from "jsonwebtoken";
// import dotenv from 'dotenv'
import { loginUser } from "../interfaces/userInterface";
import { ExtendedUser } from "../middleware/verifyToken";
import Connection from "../dbHelpers/dbHelpers";
import { loginUserSchema, registerUserSchema } from "../validators/userValidators";
import { isEmpty } from "lodash";

const dbhelper = new Connection();

export const registerUser = async (req: Request, res: Response) => {
  try {
    let { name, email, phone_no, id_no, cohort_no, password } =
      req.body;

    let employee_id = v4();

    const hashedPwd = await bcrypt.hash(password, 5);

    const pool = await mssql.connect(sqlConfig);

    console.log("here");

    let result = await pool
      .request()
      .input("employee_id", mssql.VarChar, employee_id)
      .input("name", mssql.VarChar, name)
      .input("email", mssql.VarChar, email)
      .input("phone_no", mssql.VarChar, phone_no)
      .input("id_no", mssql.Int, id_no)
      .input("cohort_no", mssql.VarChar, cohort_no)
      .input("password", mssql.VarChar, hashedPwd)
      .execute("registerUser");

   

    return res.status(200).json({
      message: "User registered successfully",
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { error } = loginUserSchema.validate(req.body);

    if (error) {
      return res.status(422).json({ error: error.message });
    }

    const pool = await mssql.connect(sqlConfig);

    let user = await (
      await pool
        .request()
        .input("email", email)
        .input("password", password)
        .execute("loginUser")
    ).recordset;

    console.log(user);

    if (user[0]?.email == email) {
      const CorrectPwd = await bcrypt.compare(password, user[0]?.password);

      if (!CorrectPwd) {
        return res.status(401).json({
          error: "Incorrect password",
        });
      }

      const LoginCredentials = user.map((records) => {
        const {
          phone_no,
          id_no,
          password,
          cohort_no,
          welcomed,
          ...rest
        } = records;

        return rest;
      });

      
      const token = jwt.sign(
        LoginCredentials[0],
        process.env.SECRET as string,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        message: "Logged in successfully",
        token,
      });
    } else {
      return res.json({
        error: "Email not found",
      });
    }
  } catch (error) {
    return res.json({
      error: "Internal server error",
    });
  }
};


export const getOneUser = async (req: Request, res: Response) => {
  try {
    let id = req.params.id;

    const pool = await mssql.connect(sqlConfig);

    let employee = (
      await pool.request().input("employee_id", id).execute("fetchOneUser")
    ).recordset;
    

    return res.status(200).json({
      employee: employee,
    });
  } catch (error) {
    return res.json({
      error: error,
    });
  }
};



export const checkUserDetails = async (
  req: ExtendedUser,
  res: Response
) => {
  if (req.info) {
    return res.json({
      info: req.info,
    });
  }
};




