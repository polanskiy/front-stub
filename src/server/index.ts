import path from 'path';
import { FastifyInstance } from 'fastify';
import fastifyStatic from 'fastify-static';
const fastify = require('fastify');

const server: FastifyInstance = fastify({ logger: true });

server.register(fastifyStatic, {
  root: path.resolve() + '/build/',
});

server.setNotFoundHandler((req, res) => {
  res.sendFile('index.html');
});

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
