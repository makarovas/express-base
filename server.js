const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("API alive"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`ping pong ${PORT}`));
