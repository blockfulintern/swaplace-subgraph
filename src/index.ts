import express, { Express } from "express";
import dotenv from "dotenv";
import { getUserRanking } from "./services/databaseQueries";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3002;

app.use(express.json());

app.use(function (req, res, next) {
  //res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Origin", "https://app.swaplace.xyz/");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

app.get("/ranking", async (req, res) => {
  if (typeof req.query.score === "string") {
    const userScore = parseInt(req.query.score, 10);
    if (isNaN(userScore)) {
      return res.status(400).send("Invalid score parameter");
    }
    try {
      const result = await getUserRanking(userScore);
      res.status(200).json({ total_count: result.rows[0].total_count });
    } catch (error) {
      console.error("Error fetching ranking:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(400).send("Score parameter is missing or invalid");
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
