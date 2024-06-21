/*
  Warnings:

  - Added the required column `imageSrc` to the `newBoard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "newBoard" ADD COLUMN     "imageSrc" TEXT NOT NULL;
