/*
  Warnings:

  - The values [ACCEPTED] on the enum `CreationStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "CreationStatus_new" AS ENUM ('PENDING', 'APPROVED', 'CANCELLED', 'REJECTED', 'COMPLETED');
ALTER TABLE "public"."salon" ALTER COLUMN "creationStatus" DROP DEFAULT;
ALTER TABLE "salon" ALTER COLUMN "creationStatus" TYPE "CreationStatus_new" USING ("creationStatus"::text::"CreationStatus_new");
ALTER TYPE "CreationStatus" RENAME TO "CreationStatus_old";
ALTER TYPE "CreationStatus_new" RENAME TO "CreationStatus";
DROP TYPE "public"."CreationStatus_old";
ALTER TABLE "salon" ALTER COLUMN "creationStatus" SET DEFAULT 'PENDING';
COMMIT;
