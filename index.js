const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("OK BACKEND RUNNING");
});

app.post("/command", (req, res) => {
  const { guildId, action } = req.body;

  console.log("COMMAND:", guildId, action);

  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("RUNNING ON PORT", PORT);
});