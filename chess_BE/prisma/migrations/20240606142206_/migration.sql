/*
  Warnings:

  - The primary key for the `News` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `ID_NEWS` on the `News` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "News" DROP CONSTRAINT "News_pkey",
DROP COLUMN "ID_NEWS",
ADD COLUMN     "ID_NEWS" INTEGER NOT NULL,
ADD CONSTRAINT "News_pkey" PRIMARY KEY ("ID_NEWS");
