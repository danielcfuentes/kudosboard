// node index.js   this is to run the server
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { PrismaClient } = require("@prisma/client");
const { parse } = require("dotenv");
const prisma = new PrismaClient();
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// retrieve all boards
app.get("/", (req, res) => {
  const board = prisma.board.findMany();
  res.json(board);
});

// create a new board
app.post("/create", (req, res) => {
  const {title, category, author} = req.body;
  const newBoard = prisma.board.create({
    data: {
      title,
      category,
      author,
    },
  });
  res.json(newBoard);
});

// delete a board
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const deletedBoard = prisma.board.delete({
    where: { id: parseInt(id) },
  });
  res.json(deletedBoard);
});
