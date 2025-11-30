/*
  Warnings:

  - A unique constraint covering the columns `[userId,id]` on the table `member` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "member_userId_idx" ON "member"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "member_userId_id_key" ON "member"("userId", "id");
