const rateLimit = require("express-rate-limit");
const express = require("express");

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 50,
});

app.use(limiter);
app.get("/health", (req, res) => {
  res.send("Ok");
});

app.listen(80, () => {
  console.log("Server connected");
});
