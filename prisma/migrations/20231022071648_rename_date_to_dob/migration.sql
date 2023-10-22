/*
  Warnings:

  - You are about to drop the column `date` on the `EmsInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EmsInfo" DROP COLUMN "date",
ADD COLUMN     "dob" TIMESTAMP(3);
