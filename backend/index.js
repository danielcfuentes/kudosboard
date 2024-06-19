// node index.js   this is to run the server
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3000;
const { PrismaClient } = require("@prisma/client");
const { parse } = require("dotenv");
const prisma = new PrismaClient();
const cors = require("cors");

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// retrieve all boards
app.get("/boards", async (req, res) => {
  const boards = await prisma.newBoard.findMany();
  res.status(200).json(boards);
});

// create a new board
app.post("/boards", async (req, res) => {
  const { title, category, author } = req.body;
  const board = await prisma.newBoard.create({
    data: {
      title,
      category,
      author,
    },
  });
  res.status(200).json(board);
});

// delete a board by id
app.delete("/boards/:id", async (req, res) => {
  console.log("id", req.params.id);
  const deletedBoard = await prisma.newBoard.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.status(200).json(deletedBoard);
});

// TODO: create something that can filter based on search
app.get("/boards/:title", async (req, res) => {
  const searchTitleBoard = await prisma.newBoard.findMany({
    where: { title: req.params.title },
  });
  res.status(200).json(searchTitleBoard);
});

// TODO: be able to filter by category
app.get("/boards/:category", async (req, res) => {
  const categoryBoards = await prisma.newBoard.findMany({
    where: { category: req.params.category },
  });
  res.status(200).json(categoryBoards);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
