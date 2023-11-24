import { Request } from "express";

export interface User {
  name: string;
  email: string;
  cohort_no: string,
  phone_no: string,
  employee_id: string;
  role: string;
}

export interface loginUser extends Request {
  email: string;
  password: string;
}
