-- DropForeignKey
ALTER TABLE "Audio" DROP CONSTRAINT "Audio_notaId_fkey";

-- DropForeignKey
ALTER TABLE "Imagen" DROP CONSTRAINT "Imagen_notaId_fkey";

-- AddForeignKey
ALTER TABLE "Imagen" ADD CONSTRAINT "Imagen_notaId_fkey" FOREIGN KEY ("notaId") REFERENCES "Nota"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Audio" ADD CONSTRAINT "Audio_notaId_fkey" FOREIGN KEY ("notaId") REFERENCES "Nota"("id") ON DELETE CASCADE ON UPDATE CASCADE;
