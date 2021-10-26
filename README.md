# oque é oque é API

Oque é oque é API gera uma charada aleatória a cada chamada.

Este projeto foi desenvolvido com o objetivo estudar um pouco mais sobre web crawler e typescript.

<br>

### Como usar
---

get https://localhost:4000/api/v1/riddles/

```json
{
  "id": "15f6cd70-7824-40d0-af6b-ce420522dc02",
  "question": "Eu te vi onde jamais esteve e onde jamais estará, e mesmo assim, você neste lugar será visto por mim. O que é?",
  "answer": "Espelho."
}
```

<br>

Caso deseje gerar uma lista de charadas passe o parametro number.

A api retorna uma lista de até 5 charadas.

get https://localhost:4000/api/v1/riddles/{number}

```json
  {
  "data": [
    {
      "id": "bca64104-915b-4406-bb48-bb3df0005b72",
      "question": "Por que a seleção brasileira tem tanta dor de ouvido?",
      "answer": "Porque tem o-Tite."
    },
    {
      "id": "2f13ce87-1e84-4577-abc5-5c2dcda977e4",
      "question": "Por que que a mulher baixinha não gosta de ir ao hospital?",
      "answer": "Porque ela só vai sair quando ela estiver alta."
    }
  ]
}
```

<br>

### Tecnologias usadas
---

- Web crawler

  - [cheerio](https://cheerio.js.org/)
  - [axios](https://axios-http.com/)

- Backend
  - [typescript](http://typescriptlang.org/)
  - [express](https://expressjs.com/)
  - [prisma](https://www.prisma.io/)

<br>

---
Desenvolvido por [renanconst](https://github.com/renanconst)
