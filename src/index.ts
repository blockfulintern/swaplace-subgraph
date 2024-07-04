import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { getUserRanking } from "./services/databaseQueries";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3002;
const allowedOrigins = [
  "http://localhost:3000",
  "https://app.swaplace.xyz",
  "https://sepolia-rpc.kakarot.org",
  "https://swaplace-ponder-production.up.railway.app",
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Access-Control-Allow-Headers"],
};
app.use(cors(corsOptions));

app.use(express.json());

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
