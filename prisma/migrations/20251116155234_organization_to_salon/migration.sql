/*
  Warnings:

  - You are about to drop the column `employeeId` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `creationStatus` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `rejectedAt` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `rejectedBy` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `rejectionReason` on the `organization` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `salon_availability` table. All the data in the column will be lost.
  - You are about to drop the column `organizationId` on the `salon_service` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[salonId,memberId,dayOfWeek]` on the table `salon_availability` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[salonId,serviceId]` on the table `salon_service` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `MemberId` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salonId` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salonId` to the `salon_availability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salonId` to the `salon_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "salon_availability" DROP CONSTRAINT "salon_availability_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "salon_service" DROP CONSTRAINT "salon_service_organizationId_fkey";

-- DropIndex
DROP INDEX "appointment_employeeId_startsAt_idx";

-- DropIndex
DROP INDEX "appointment_organizationId_idx";

-- DropIndex
DROP INDEX "salon_availability_organizationId_idx";

-- DropIndex
DROP INDEX "salon_availability_organizationId_memberId_dayOfWeek_key";

-- DropIndex
DROP INDEX "salon_service_organizationId_serviceId_key";

-- AlterTable
ALTER TABLE "appointment" DROP COLUMN "employeeId",
DROP COLUMN "organizationId",
ADD COLUMN     "MemberId" TEXT NOT NULL,
ADD COLUMN     "salonId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "member" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "specialties" SET DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "organization" DROP COLUMN "address",
DROP COLUMN "creationStatus",
DROP COLUMN "description",
DROP COLUMN "email",
DROP COLUMN "phone",
DROP COLUMN "rejectedAt",
DROP COLUMN "rejectedBy",
DROP COLUMN "rejectionReason";

-- AlterTable
ALTER TABLE "salon_availability" DROP COLUMN "organizationId",
ADD COLUMN     "salonId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "salon_service" DROP COLUMN "organizationId",
ADD COLUMN     "salonId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "salon" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "organizationId" TEXT,
    "creationStatus" "CreationStatus" NOT NULL DEFAULT 'PENDING',
    "rejectionReason" TEXT,
    "rejectedAt" TIMESTAMP(3),
    "rejectedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "salon_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "salon_organizationId_key" ON "salon"("organizationId");

-- CreateIndex
CREATE INDEX "appointment_MemberId_startsAt_idx" ON "appointment"("MemberId", "startsAt");

-- CreateIndex
CREATE INDEX "appointment_salonId_idx" ON "appointment"("salonId");

-- CreateIndex
CREATE INDEX "salon_availability_salonId_idx" ON "salon_availability"("salonId");

-- CreateIndex
CREATE UNIQUE INDEX "salon_availability_salonId_memberId_dayOfWeek_key" ON "salon_availability"("salonId", "memberId", "dayOfWeek");

-- CreateIndex
CREATE UNIQUE INDEX "salon_service_salonId_serviceId_key" ON "salon_service"("salonId", "serviceId");

-- AddForeignKey
ALTER TABLE "salon" ADD CONSTRAINT "salon_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salon_availability" ADD CONSTRAINT "salon_availability_salonId_fkey" FOREIGN KEY ("salonId") REFERENCES "salon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salon_service" ADD CONSTRAINT "salon_service_salonId_fkey" FOREIGN KEY ("salonId") REFERENCES "salon"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_salonId_fkey" FOREIGN KEY ("salonId") REFERENCES "salon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_MemberId_fkey" FOREIGN KEY ("MemberId") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
