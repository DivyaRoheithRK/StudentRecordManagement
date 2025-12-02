import mysql from "mysql2";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "studentdb"
});

db.connect((err) => {
  if (err) console.log("Database connection failed:", err);
  else console.log("Database connected!");
});