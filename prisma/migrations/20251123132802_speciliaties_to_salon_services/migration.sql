/*
  Warnings:

  - You are about to drop the column `specialties` on the `member` table. All the data in the column will be lost.
  - Added the required column `memberId` to the `salon_service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "member" DROP COLUMN "specialties";

-- AlterTable
ALTER TABLE "salon_service" ADD COLUMN     "memberId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "salon_service" ADD CONSTRAINT "salon_service_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
