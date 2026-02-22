const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const tips = {
  student: [
    "Estudia en bloques de 45 minutos.",
    "Usa la técnica Pomodoro.",
    "Evita distracciones digitales.",
    "Organiza tus tareas por prioridad."
  ],
  entrepreneur: [
    "Define 3 objetivos clave al día.",
    "Delegar tareas estratégicamente.",
    "Evita multitarea.",
    "Revisa métricas semanalmente."
  ],
  professional: [
    "Planifica tu día la noche anterior.",
    "Bloquea tiempos sin interrupciones.",
    "Prioriza tareas importantes.",
    "Haz pausas activas cada 2 horas."
  ]
};

app.get("/api/tips/:profile", (req, res) => {
  const profile = req.params.profile;
  res.json({
    profile,
    tips: tips[profile] || []
  });
});

app.listen(5000, () => {
  console.log("Servidor corriendo en http://localhost:5000");
});