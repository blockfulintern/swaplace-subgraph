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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRanking = void 0;
const databaseConnection_1 = require("./databaseConnection");
const getRanking = (userScore) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield databaseConnection_1.pool.query('SELECT COUNT(id) AS total_count FROM "ProfileDatabase" WHERE "totalScore" > $1;', [userScore]);
        return result;
    }
    catch (error) {
        console.error("Error executing query", error);
        throw error;
    }
});
exports.getRanking = getRanking;
