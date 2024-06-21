-- CreateTable
CREATE TABLE "newCard" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "gif" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "newBoardId" INTEGER,

    CONSTRAINT "newCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "newCard" ADD CONSTRAINT "newCard_newBoardId_fkey" FOREIGN KEY ("newBoardId") REFERENCES "newBoard"("id") ON DELETE SET NULL ON UPDATE CASCADE;
