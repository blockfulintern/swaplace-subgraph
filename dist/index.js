"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const databaseQueries_1 = require("./services/databaseQueries");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3002;
app.use(express_1.default.json());
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000/");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers");
    next();
});
app.get("/ranking", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof req.query.score === "string") {
        const userScore = parseInt(req.query.score, 10);
        if (isNaN(userScore)) {
            return res.status(400).send("Invalid score parameter");
        }
        try {
            const result = yield (0, databaseQueries_1.getRanking)(userScore);
            res.status(200).json({ total_count: result.rows[0].total_count });
        }
        catch (error) {
            console.error("Error fetching ranking:", error);
            res.status(500).send("Internal Server Error");
        }
    }
    else {
        res.status(400).send("Score parameter is missing or invalid");
    }
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
