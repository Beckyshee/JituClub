import { Router } from "express";
import {
    LoginUser,
  checkUserDetails,
  getOneUser,
  registerUser,
} from "../controllers/userController";
import { verifyToken } from "../middleware/verifyToken";

const employee_router = Router();

employee_router.post("/register", registerUser);
employee_router.post("/login", LoginUser);

employee_router.get("/check_user_details", verifyToken, checkUserDetails);
employee_router.get("/:id", verifyToken, getOneUser);


export default employee_router;
