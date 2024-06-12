import { pool } from "./databaseConnection";

export const getUserRanking = async (userScore: number): Promise<any> => {
  try {
    const result = await pool.query(
      'SELECT COUNT(id) AS total_count FROM "ProfileDatabase" WHERE "totalScore" >= $1;',
      [userScore]
    );
    return result;
  } catch (error) {
    console.error("Error executing query", error);
    throw error;
  }
};
