const express = require("express");

const app = express();
const PORT = process.env.PORT || 3002;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-2-pipeline-jenkinsfiless",
    message: "Welcome to Project 2 APIs",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    project: "project-2-pipeline-jenkinsfile",
    message: "Service is healthy",
  });
});

// FIXED: Remove the require.main wrapper and bind to 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Project 2 API running on port ${PORT}`);
});

module.exports = app;
