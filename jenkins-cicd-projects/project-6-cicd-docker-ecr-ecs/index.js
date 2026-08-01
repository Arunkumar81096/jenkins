const express = require("express");

const app = express();
const PORT = process.env.PORT || 3006;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-6-cicd-docker-ecr-ecs",
    message: "Welcome to Project 6 API",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-6-cicd-docker-ecr-ecs",
    message: "Service is healthy",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Project 6 API running on port ${PORT}`);
  });
}

module.exports = app;
