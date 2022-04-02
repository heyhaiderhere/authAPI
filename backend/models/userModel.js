import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// creating the schema mmodel for the user to save in database
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  businessName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    max: 255,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

// Matching password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// Hashing password before creating the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log("saved");
});

const User = mongoose.model("User", userSchema);
export default User;
