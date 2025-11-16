/*
  Warnings:

  - You are about to drop the column `salonId` on the `appointment` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `employeeId` on the `salon_availability` table. All the data in the column will be lost.
  - You are about to drop the column `salonId` on the `salon_availability` table. All the data in the column will be lost.
  - You are about to drop the column `salonId` on the `salon_service` table. All the data in the column will be lost.
  - You are about to drop the `employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `salon` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[organizationId,memberId,dayOfWeek]` on the table `salon_availability` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[organizationId,serviceId]` on the table `salon_service` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `organizationId` to the `appointment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `organization` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `salon_availability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organizationId` to the `salon_service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_salonId_fkey";

-- DropForeignKey
ALTER TABLE "employee" DROP CONSTRAINT "employee_salonId_fkey";

-- DropForeignKey
ALTER TABLE "employee" DROP CONSTRAINT "employee_userId_fkey";

-- DropForeignKey
ALTER TABLE "salon_availability" DROP CONSTRAINT "salon_availability_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "salon_availability" DROP CONSTRAINT "salon_availability_salonId_fkey";

-- DropForeignKey
ALTER TABLE "salon_service" DROP CONSTRAINT "salon_service_salonId_fkey";

-- DropForeignKey
ALTER TABLE "salon_service" DROP CONSTRAINT "salon_service_serviceId_fkey";

-- DropIndex
DROP INDEX "appointment_salonId_idx";

-- DropIndex
DROP INDEX "salon_availability_employeeId_idx";

-- DropIndex
DROP INDEX "salon_availability_salonId_employeeId_dayOfWeek_key";

-- DropIndex
DROP INDEX "salon_availability_salonId_idx";

-- DropIndex
DROP INDEX "salon_service_salonId_serviceId_key";

-- AlterTable
ALTER TABLE "appointment" DROP COLUMN "salonId",
ADD COLUMN     "organizationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "member" DROP COLUMN "role",
ADD COLUMN     "specialties" TEXT[];

-- AlterTable
ALTER TABLE "organization" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "creationStatus" "CreationStatus" NOT NULL DEFAULT 'PENDING',
ADD COLUMN     "description" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "rejectedAt" TIMESTAMP(3),
ADD COLUMN     "rejectedBy" TEXT,
ADD COLUMN     "rejectionReason" TEXT;

-- AlterTable
ALTER TABLE "salon_availability" DROP COLUMN "employeeId",
DROP COLUMN "salonId",
ADD COLUMN     "memberId" TEXT,
ADD COLUMN     "organizationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "salon_service" DROP COLUMN "salonId",
ADD COLUMN     "organizationId" TEXT NOT NULL;

-- DropTable
DROP TABLE "employee";

-- DropTable
DROP TABLE "salon";

-- CreateIndex
CREATE INDEX "appointment_organizationId_idx" ON "appointment"("organizationId");

-- CreateIndex
CREATE INDEX "salon_availability_organizationId_idx" ON "salon_availability"("organizationId");

-- CreateIndex
CREATE INDEX "salon_availability_memberId_idx" ON "salon_availability"("memberId");

-- CreateIndex
CREATE UNIQUE INDEX "salon_availability_organizationId_memberId_dayOfWeek_key" ON "salon_availability"("organizationId", "memberId", "dayOfWeek");

-- CreateIndex
CREATE UNIQUE INDEX "salon_service_organizationId_serviceId_key" ON "salon_service"("organizationId", "serviceId");

-- AddForeignKey
ALTER TABLE "salon_availability" ADD CONSTRAINT "salon_availability_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salon_availability" ADD CONSTRAINT "salon_availability_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salon_service" ADD CONSTRAINT "salon_service_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salon_service" ADD CONSTRAINT "salon_service_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
