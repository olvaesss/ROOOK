/*
  Warnings:

  - Added the required column `CREATEDATE` to the `News` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "News" ADD COLUMN     "CREATEDATE" TIMESTAMP(3) NOT NULL;
