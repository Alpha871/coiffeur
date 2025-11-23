/*
  Warnings:

  - Added the required column `category` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ServiceCategory" AS ENUM ('HAIRCUT', 'COLORING', 'STYLING', 'TREATMENTS', 'EXTENSIONS', 'BARBERING', 'NAILS', 'KIDS');

-- AlterTable
ALTER TABLE "service" ADD COLUMN     "category" "ServiceCategory" NOT NULL;
