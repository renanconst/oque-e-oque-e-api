import express, { Application } from "express";
import RiddleController from "./app/RiddleController";

class App {
  private express: Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  routes() {
    this.express.use(RiddleController.router);
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}

export default new App();
