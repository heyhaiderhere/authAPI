import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    user login
// @route   GET /api/users/login
// @access  public
const userLogin = asyncHandler(async (req, res) => {
  // finding the user from data base
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist && (await userExist.matchPassword(password))) {
    //logging the user in
    res.status(200).send({
      email: userExist.email,
      firstName: userExist.firstName,
      lastName: userExist.lastName,
      phoneNumber: userExist.phoneNumber,
      country: userExist.country,
      businessName: userExist.businessName,
      token: generateToken(userExist._id),
    });
  } else {
    res.status(404).send("wrong email or password");
  }
});

// @desc    user registration
// @route   GET /api/users/register
// @access  public

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    country,
    businessName,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) return res.status(400).send("user already exists");

  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    country,
    businessName,
  });
  if (user) {
    res.status(201).json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      country: user.country,
      businessName: user.businessName,
      phoneNumber: user.phoneNumber,
      id: user._id,
      token: generateToken(user._id),
    });
  } else {
    res.status(404).send("something went wrong");
  }
});

// @desc    user profile
// @route   GET /api/users/profile
// @access  private

const getUserProfile = asyncHandler(async (req, res) => {
  res.send(req.user._id);
});

export { registerUser, userLogin, getUserProfile };
