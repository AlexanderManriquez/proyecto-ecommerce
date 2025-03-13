require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/tienda")
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch(err => console.error("❌ Error en la conexión", err));

// Rutas
app.get("/", (req, res) => res.send("Servidor corriendo 🚀"));

app.get("/productos", async (req, res) => {
  try {
    const productos = await Product.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener productos" });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`✅ Servidor en http://localhost:${PORT}`));
