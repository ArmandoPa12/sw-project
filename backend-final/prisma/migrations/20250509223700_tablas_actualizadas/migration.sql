/*
  Warnings:

  - You are about to drop the column `grupoId` on the `Nota` table. All the data in the column will be lost.
  - You are about to drop the `Grupo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `contenido_copia` to the `Nota` table without a default value. This is not possible if the table is not empty.
  - Added the required column `materiaId` to the `Nota` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Grupo" DROP CONSTRAINT "Grupo_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Nota" DROP CONSTRAINT "Nota_grupoId_fkey";

-- AlterTable
ALTER TABLE "Nota" DROP COLUMN "grupoId",
ADD COLUMN     "contenido_copia" TEXT NOT NULL,
ADD COLUMN     "materiaId" INTEGER NOT NULL,
ADD COLUMN     "mermaid" TEXT;

-- DropTable
DROP TABLE "Grupo";

-- CreateTable
CREATE TABLE "Materia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imagen" (
    "id" SERIAL NOT NULL,
    "ruta" TEXT NOT NULL,
    "notaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Imagen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audio" (
    "id" SERIAL NOT NULL,
    "ruta" TEXT NOT NULL,
    "notaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Audio_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nota" ADD CONSTRAINT "Nota_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Materia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_notaId_fkey" FOREIGN KEY ("notaId") REFERENCES "Nota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audio" ADD CONSTRAINT "Audio_notaId_fkey" FOREIGN KEY ("notaId") REFERENCES "Nota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
