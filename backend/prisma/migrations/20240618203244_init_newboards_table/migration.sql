-- CreateTable
CREATE TABLE "newBoard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "newBoard_pkey" PRIMARY KEY ("id")
);
