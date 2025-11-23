-- DropForeignKey
ALTER TABLE "salon_service" DROP CONSTRAINT "salon_service_memberId_fkey";

-- AlterTable
ALTER TABLE "salon_service" ALTER COLUMN "memberId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "salon_service" ADD CONSTRAINT "salon_service_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE SET NULL ON UPDATE CASCADE;
