import dotenv from "dotenv";

dotenv.config();

const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DOMAIN: process.env.DOMAIN,
  MONGO_URI: process.env.MONGO_URI,
}

export default config;
