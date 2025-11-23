/*
  Warnings:

  - You are about to drop the column `priceCents` on the `service` table. All the data in the column will be lost.
  - Added the required column `price` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service" DROP COLUMN "priceCents",
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ALTER COLUMN "durationMin" SET DATA TYPE DOUBLE PRECISION;
