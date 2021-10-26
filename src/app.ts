import express, { Application } from "express";
import RiddleController from "./app/RiddleController";
import cors from "cors";

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.routes();
    this.middlewares();
  }

  routes() {
    this.express.use(RiddleController.router);
  }

  middlewares() {
    this.express.use(
      cors({
        origin: "*",
      })
    );
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}

export default new App();
