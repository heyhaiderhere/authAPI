import jwt from "jsonwebtoken";

// JWT token generation for authorizing leter for further server calls
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "10m",
  });
};

export default generateToken;
