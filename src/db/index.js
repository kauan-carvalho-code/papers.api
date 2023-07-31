import mongoose from "mongoose";

import config from "../config";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(config.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log("MongoDB has been connected!");
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

export default connectDB;
