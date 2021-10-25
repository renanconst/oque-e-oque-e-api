import axios from "axios";
import cheerio from "cheerio";
import prismaClient from "../src/prisma";

const URL = "https://www.osvigaristas.com.br/charadas/pagina";

interface IRiddles {
  question: string;
  answer: string;
}

class riddleCrawler {
  private async scraping() {
    const riddlesArray: IRiddles[] = [];

    for (let i = 1; i < 4; i++) {
      const response = await axios.get<string>(`${URL}${i}.html`);

      const $ = cheerio.load(response.data);

      const riddles = $(".item-index");

      riddles.map((i, element) => {
        return riddlesArray.push({
          question: $(element).find(".question").text(),
          answer: $(element).find(".toggleable").text(),
        });
      });
    }

    return riddlesArray;
  }

  async addToDatabase() {
    const riddles = await this.scraping();

    riddles.map(async (riddle) => {
      try {
        return await prismaClient.riddle.create({
          data: {
            answer: riddle.answer,
            question: riddle.question,
          },
        });
      } catch (error) {
        console.log({ error: error });
      }
    });
  }
}

new riddleCrawler().addToDatabase();
