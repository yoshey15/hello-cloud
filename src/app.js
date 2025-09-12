// app.js inicial
// Importar Express (ES Modules)
import express from "express";
// Crear la aplicación
const app = express();
// Endpoint básico
app.get("/", (req, res) => {
  res.send("¡Hola, nube!");
});
// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});