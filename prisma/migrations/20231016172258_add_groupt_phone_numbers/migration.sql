/*
  Warnings:

  - Added the required column `groupNumber` to the `EmsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `EmsInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmsInfo" ADD COLUMN     "groupNumber" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;
