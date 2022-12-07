/*
  Warnings:

  - You are about to alter the column `refresh_token_expires_in` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `Text` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Account` MODIFY `refresh_token_expires_in` DATETIME(3) NULL;
