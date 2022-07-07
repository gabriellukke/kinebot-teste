import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());

app.post("/api/users", (req, res, next) => {
  res.status(200).send(data);
});

app.listen(PORT, () => console.log(`Running app in port: ${PORT}`));
