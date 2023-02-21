import mongoose from "mongoose";

const Rastreio = mongoose.model("rastreio", {
  codrastreio: String,
});

export default Rastreio;
