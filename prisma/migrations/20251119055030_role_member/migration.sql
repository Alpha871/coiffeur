/*
  Warnings:

  - Added the required column `role` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "member" ADD COLUMN     "role" TEXT NOT NULL;
