import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// middleware for authorizing the user sessions using jsonWebToken
const privateRoute = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decodedData.id).select("-password");
      next();
    } catch (error) {
      res.send(error.message);
    }
  }
  if (!token) {
    res.status(404).send("Not authorized, token not found");
  }
});

export { privateRoute };
