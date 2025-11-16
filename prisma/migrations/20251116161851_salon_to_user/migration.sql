-- AlterTable
ALTER TABLE "salon" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "salon" ADD CONSTRAINT "salon_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
