import axios from "axios";
import cheerio from "cheerio";

const URL = "https://www.osvigaristas.com.br/charadas/pagina";

interface IRiddles {
  question: string;
  answer: string;
}

class riddleCrawler {
  async scraping() {
    const riddlesArray: IRiddles[] = [];

    for (let i = 1; i < 4; i++) {
      const response = await axios.get<string>(`${URL}${i}.html`);

      const $ = cheerio.load(response.data);

      const riddles = $(".item-index");

      riddles.each((i, element) => {
        riddlesArray.push({
          question: $(element).find(".question").text(),
          answer: $(element).find(".toggleable").text(),
        });
      });
    }

    return riddlesArray;
  }
}

new riddleCrawler().scraping();
