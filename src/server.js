// Importando o Express na Index
import app from "./index.js";
//Importando o mongoose
import mongoose from "mongoose";

const mongoConnection = process.env.MONGO_CONNECTION;
const port = process.env.PORT || 3000;

// Conectando com o banco de dados
mongoose
  .connect(mongoConnection)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Connected with success! \nListening on: http://localhost:${port}`
      );
    });
  })
  .catch((err) => console.log(`${err}: Erro de conexão com o banco de dados!`));
