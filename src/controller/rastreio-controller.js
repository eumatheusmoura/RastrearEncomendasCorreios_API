import express from "express";
const router = express.Router();
import { rastrearEncomendas } from "correios-brasil";

// GET ALL
router.get("/:codRastreio", async (req, res) => {
  try {
    const codRastreio = req.params.codRastreio.toLocaleUpperCase();

    const response = await rastrearEncomendas([codRastreio]);

    if (response.length > 0) {
      res.status(200).json(response[0]);
    } else {
      res.status(404).json({ error: "Código de rastreio não encontrado." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Não foi possível encontrar seu rastreio." });
  }
});

export default router;
