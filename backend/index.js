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
//GIPHY
app.post('/boards', async (req, res) => {
    const { title, category, author } = req.body

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`)
    const gifData = await response.json()
    const imageUrl = gifData.data.images.downsized.url

    const board = await prisma.newBoard.create({
        data: {
            title,
            imageSrc: imageUrl,
            category,
            author
        }
    })
    res.json(board)
})

// delete a board by id
app.delete("/boards/:id", async (req, res) => {
  const deletedBoard = await prisma.newBoard.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.status(200).json(deletedBoard);
});

// TODO: create something that can filter by title based on search
app.get("/boards/getTitle/:title", async (req, res) => {
  const searchTitleBoard = await prisma.newBoard.findMany({
    where: {
      title: { startsWith: req.params.title, mode: "insensitive" },
    },
  });
  res.status(200).json(searchTitleBoard);
});

// TODO: be able to filter by category
app.get("/boards/getCategory/:category", async (req, res) => {
  if (req.params.category === "All") {
    const allBoards = await prisma.newBoard.findMany();
    res.status(200).json(allBoards);

  } else if (req.params.category === "Recent") {
    const recentBoards = await prisma.newBoard.findMany({
      orderBy: {
        id: "desc",
      },
    });
    res.status(200).json(recentBoards);

  } else {
    const categoryBoards = await prisma.newBoard.findMany({
      where: { category: req.params.category },
    });
    res.status(200).json(categoryBoards);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});


// CARD Page

// retrieve all cards
app.get("/cards", async (req, res) => {
  const cards = await prisma.newCard.findMany();
  res.status(200).json(cards);
});

// create a new card
app.post("/cards", async (req, res) => {
  const { title, description, gif, owner} = req.body;
  const card = await prisma.newCard.create({
    data: {
      title,
      description,
      gif,
      owner,
      likes: 0,
    },
  });
  res.status(200).json(card);
});

// delete a card by id
app.delete("/cards/:id", async (req, res) => {
  const deletedCard = await prisma.newCard.delete({
    where: { id: parseInt(req.params.id) },
  });
  res.status(200).json(deletedCard);
});

//increment the likes of a card
app.put("/cards/like/:id", async (req, res) => {
  const card = await prisma.newCard.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  const newLikes = card.likes + 1;
  const updatedCard = await prisma.newCard.update({
    where: { id: parseInt(req.params.id) },
    data: { likes: newLikes },
  });
  res.status(200).json(updatedCard);
});
