const express = require("express");

const app = express();
const PORT = process.env.PORT || 3004;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-4-multibranch-pipeline",
    message: "Welcome to Project 4 API",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-4-multibranch-pipeline",
    message: "Service is healthy",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Project 4 API running on port ${PORT}`);
  });
}

module.exports = app;
