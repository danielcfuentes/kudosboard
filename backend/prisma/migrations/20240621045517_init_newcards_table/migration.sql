/*
  Warnings:

  - Added the required column `likes` to the `newCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "newCard" ADD COLUMN     "likes" INTEGER NOT NULL;
