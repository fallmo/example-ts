import mongoose from "mongoose";


// const x = 'unused';

export const connectToDatabase = async () => {
  console.log("Attempting to connect to database...");

  // bad practice
  const MONGO_URI = "mongodb://localhost:27017/stats";

  // good practice
  // const { MONGO_URI } = process.env;
  // if (!MONGO_URI) {
  //   console.log("missing MONGO_URI env variables!");
  //   process.exit(1);
  // }



  try {
    await mongoose.connect(MONGO_URI);
    console.log("Database connection established..");
  } catch (error) {
    console.log("Failed to connect to database", error);
    process.exit(1);
  }
};

