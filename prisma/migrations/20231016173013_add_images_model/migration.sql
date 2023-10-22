/*
  Warnings:

  - Added the required column `description` to the `EmsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `EmsInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `policyNumber` to the `EmsInfo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EmsInfo" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "policyNumber" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "emsInfoId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_emsInfoId_fkey" FOREIGN KEY ("emsInfoId") REFERENCES "EmsInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
