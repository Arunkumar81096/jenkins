const express = require("express");

const app = express();
const PORT = process.env.PORT || 3003;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-3-cicd-docker-deploy",
    message: "Welcome to Project 3 API",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-3-cicd-docker-deploy",
    message: "Service is healthy",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Project 3 API running on port ${PORT}`);
  });
}

module.exports = app;
