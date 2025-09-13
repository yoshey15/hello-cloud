import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    message: "Hello Cloud ☁️",
    docs: ["/health", "/version", "/about"]
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/version", (_req, res) => {
  res.json({ name: "hello-cloud", version: "1.0.0" });
});

app.get("/ping", (_req, res) => {
  res.json({ pong: "realizado por: obrian sanchez y andres cardoso", at: new Date().toISOString() });
});

// Nuevo endpoint /about
app.get("/about", (_req, res) => {
  res.json({
    project: "hello-cloud",
    description: "Proyecto de ejemplo para practicar despliegue en la nube con Node.js y Express",
    author: "Andrés Felipe Cardoso Bernal",
    createdAt: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
