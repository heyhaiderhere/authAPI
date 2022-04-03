import express from "express";
import {
  registerUser,
  userLogin,
  getUserProfile,
} from "../controller/userController.js";
import { privateRoute } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", userLogin);
router.get("/profile", privateRoute, getUserProfile);
export default router;
