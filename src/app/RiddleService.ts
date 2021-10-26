import { Request, Response } from "express";
import prismaClient from "../prisma";

interface IRIddle {
  id?: string;
  question?: string;
  answer?: string;
}

class RiddleService {
  async getOne(req: Request, res: Response) {
    const count = await prismaClient.riddle.count();
    const randomNumber = Math.floor(Math.random() * count);

    const riddle = await prismaClient.riddle.findFirst({
      skip: randomNumber,
    });

    return res.json({
      id: riddle?.id,
      question: riddle?.question,
      answer: riddle?.answer,
    });
  }

  async get(req: Request, res: Response) {
    let { number } = req.params;

    console.log(parseInt(number));

    if (isNaN(parseInt(number))) {
      return res.json({ error: "invalid parameter." }).status(404);
    }

    if (parseInt(number) < 1 || parseInt(number) > 5) {
      return res.json({ error: "invalid parameter value." }).status(404);
    }

    const count = await prismaClient.riddle.count();

    const riddleArray: IRIddle[] = [];

    for (let i = 0; i < parseInt(number); i++) {
      const randomNumber = Math.floor(Math.random() * count);

      const riddle = await prismaClient.riddle.findFirst({
        skip: randomNumber,
      });

      const data = {
        id: riddle?.id,
        question: riddle?.question,
        answer: riddle?.answer,
      };

      riddleArray.push(data);
    }
    return res.json({ data: riddleArray });
  }

  notFound(req: Request, res: Response) {
    return res.json({ error: "page not found." }).status(404);
  }
}

export default new RiddleService();
