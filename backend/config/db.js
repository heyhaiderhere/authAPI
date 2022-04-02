import mongoose from "mongoose";

// connecting to the dataBase (mongoDB)
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connection esteblished with ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
