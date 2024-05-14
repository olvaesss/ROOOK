/*
  Warnings:

  - The primary key for the `Game` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID_PLAYER_1` on the `Game` table. All the data in the column will be lost.
  - You are about to drop the column `ID_PLAYER_2` on the `Game` table. All the data in the column will be lost.
  - The `ID_GAME` column on the `Game` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Game" DROP CONSTRAINT "Game_pkey",
DROP COLUMN "ID_PLAYER_1",
DROP COLUMN "ID_PLAYER_2",
ADD COLUMN     "PLAYER_1" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "PLAYER_2" TEXT NOT NULL DEFAULT '',
DROP COLUMN "ID_GAME",
ADD COLUMN     "ID_GAME" SERIAL NOT NULL,
ALTER COLUMN "WINNER" SET DATA TYPE TEXT,
ADD CONSTRAINT "Game_pkey" PRIMARY KEY ("ID_GAME");
