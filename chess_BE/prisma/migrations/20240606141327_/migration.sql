/*
  Warnings:

  - The primary key for the `News` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `IMAGE` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" DROP CONSTRAINT "News_pkey",
ADD COLUMN     "IMAGE" TEXT NOT NULL,
ALTER COLUMN "ID_NEWS" SET DATA TYPE TEXT,
ADD CONSTRAINT "News_pkey" PRIMARY KEY ("ID_NEWS");
