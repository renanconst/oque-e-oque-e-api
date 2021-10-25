import express, { Application } from "express";

class App {
  private express: Application;

  constructor() {
    this.express = express();
  }

  listen(port: number) {
    this.express.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}

export default new App();
