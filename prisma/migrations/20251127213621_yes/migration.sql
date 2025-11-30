-- DropForeignKey
ALTER TABLE "appointment" DROP CONSTRAINT "appointment_memberId_fkey";

-- AddForeignKey
ALTER TABLE "appointment" ADD CONSTRAINT "appointment_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("id") ON DELETE CASCADE ON UPDATE CASCADE;
