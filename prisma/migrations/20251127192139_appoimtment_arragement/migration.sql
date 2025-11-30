/*
  Warnings:

  - The values [CONFIRMED] on the enum `AppointmentStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `MemberId` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `priceCents` on the `appointment` table. All the data in the column will be lost.
  - Added the required column `duration` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memberId` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "AppointmentStatus_new" AS ENUM ('PENDING', 'APPROVED', 'CANCELLED', 'REJECTED', 'COMPLETED');
ALTER TABLE "public"."appointment" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "appointment" ALTER COLUMN "status" TYPE "AppointmentStatus_new" USING ("status"::text::"AppointmentStatus_new");
ALTER TYPE "AppointmentStatus" RENAME TO "AppointmentStatus_old";
ALTER TYPE "AppointmentStatus_new" RENAME TO "AppointmentStatus";
DROP TYPE "public"."AppointmentStatus_old";
ALTER TABLE "appointment" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_MemberId_fkey";

-- DropIndex
DROP INDEX "appointment_MemberId_startsAt_idx";

-- AlterTable
ALTER TABLE "appointment" DROP COLUMN "MemberId",
DROP COLUMN "priceCents",
ADD COLUMN     "duration" INTEGER NOT NULL,
ADD COLUMN     "memberId" TEXT NOT NULL,
ADD COLUMN     "notes" TEXT,
ADD COLUMN     "price" INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX "appointment_memberId_startsAt_idx" ON "appointment"("memberId", "startsAt");

-- CreateIndex
CREATE INDEX "appointment_memberId_customerId_idx" ON "appointment"("memberId", "customerId");

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
