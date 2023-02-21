// Importações de bibliotecas Express e Dotenv
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// rotas dos pedidos
import rastreioController from "./controller/rastreio-controller.js";
app.use("/rastreio", rastreioController);

// Exportando o Express
export default app;
