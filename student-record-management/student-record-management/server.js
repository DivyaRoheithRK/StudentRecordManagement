import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { db } from "./db.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/students", (req, res) => {
  const { name, age, department } = req.body;
  const sql = "INSERT INTO students (name, age, department) VALUES (?, ?, ?)";
  db.query(sql, [name, age, department], (err) =>
    err ? res.status(500).send(err) : res.send({ message: "Student added successfully!" })
  );
});

app.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, rows) =>
    err ? res.status(500).send(err) : res.send(rows)
  );
});

app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, department } = req.body;
  const sql = "UPDATE students SET name=?, age=?, department=? WHERE id=?";
  db.query(sql, [name, age, department, id], (err) =>
    err ? res.status(500).send(err) : res.send({ message: "Student updated!" })
  );
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM students WHERE id=?";
  db.query(sql, [id], (err) =>
    err ? res.status(500).send(err) : res.send({ message: "Student deleted!" })
  );
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));