-- AlterTable
ALTER TABLE "EmsInfo" ALTER COLUMN "groupNumber" DROP NOT NULL,
ALTER COLUMN "phoneNumber" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "policyNumber" DROP NOT NULL;
