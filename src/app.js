import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.routes();
    this.exceptionHandler();
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
