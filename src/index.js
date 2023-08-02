import express from "express";

import swaggerJSDoc from 'swagger-jsdoc';

import swaggerUi from 'swagger-ui-express';

import bodyParser from "body-parser";

import cors from 'cors';

import config from "./config";

import connectDB from "./db";

import papersRoutes from "./routes/papers";

const swaggerDefinition = {
  openapi: '3.1.0',
  info: {
    title: 'Papers API',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express.',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
  },
  servers: [
    {
      url: config.NODE_ENV === 'local' ? 'http://localhost:3000' : config.DOMAIN,
      description: config.NODE_ENV === 'local' ? 'Development server' : 'Production server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const server = express();

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

server.use(cors())

server.use(bodyParser.json());

connectDB();

const PORT = config.PORT || 3000;

server.use("/papers", papersRoutes);

server.listen(PORT, () => {
  console.log(`Our server is running on port ${PORT}`);
});
