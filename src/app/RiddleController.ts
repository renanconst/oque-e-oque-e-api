import { Router } from "express";
import RiddleService from "./RiddleService";

class RiddleController {
  router = Router();

  constructor() {
    this.routes();
  }

  routes() {
    this.router.get("/api/v1/riddles/:number", RiddleService.get);
    this.router.get("/api/v1/riddles/", RiddleService.getOne);
    this.router.use("/", RiddleService.notFound);
  }
}

export default new RiddleController();
