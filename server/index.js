const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = [];

app.post("/api/portfolios", (req, res) => {
  const id = db.length + 1;
  const profile = { id, ...req.body };
  db.push(profile);
  res.json({ id });
});

app.get("/api/portfolios", (req, res) => {
  res.json(db);
});

app.get("/api/portfolios/:id", (req, res) => {
  const item = db.find((p) => p.id === Number(req.params.id));
  if (item) res.json(item);
  else res.status(404).end();
});

app.listen(4000, () => console.log("✅ API running at http://localhost:4000"));
