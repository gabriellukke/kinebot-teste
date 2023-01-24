import express from "express";
import cors from "cors";

import users from "../data/users.js";

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/api/users", (req, res) => {

  console.log(users);
  res.status(200).json(users.user);
});

app.post("/api/users", (req, res, next) => {
  res.status(200).send([]);
});

app.listen(PORT, () => console.log(`Running app in port: ${PORT}`));
