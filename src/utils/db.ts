const mongoose = require("mongoose");

export const connectToDatabase = async () => {
  console.log("Attempting to connect to database...");

  // bad practice
  // const uri = "mongodb://localhost:27017/stats";

  // good practice
  const { DATABASE_SERVICE, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } = process.env;
  if (!DATABASE_SERVICE || !DATABASE_USER || !DATABASE_PASSWORD || !DATABASE_NAME) {
    console.log("missing DATABASE env variables!");
    process.exit(1);
  }

  const uri = `mongodb://${DATABASE_SERVICE}:27017/${DATABASE_NAME}`;

  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
      authSource: "admin",
      user: DATABASE_USER,
      pass: DATABASE_PASSWORD,
    });
    console.log("Database connection established..");
  } catch (error) {
    console.log("Failed to connect to database", error);
    process.exit(1);
  }
};

