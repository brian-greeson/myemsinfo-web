-- AlterTable
ALTER TABLE "ShareLink" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT 'My Share Link';
