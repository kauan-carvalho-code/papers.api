import express from "express";

import bodyParser from "body-parser";

import cors from 'cors';

import config from "./config";

import connectDB from "./db";

import papersController from "./controllers/papers";

const server = express();

server.use(cors())

server.use(bodyParser.json());

connectDB();

const PORT = config.PORT || 3000;

server.use("/papers", papersController);

server.listen(PORT, () => {
  console.log(`Our server is running on port ${PORT}`);
});
