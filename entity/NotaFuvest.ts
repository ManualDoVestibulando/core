// Notas do vestibulas da fuvest
// notas normalizads
export type NotaFuvest = {
  nusp?: number;
  instituto: string;
  curso: string;
  modalidade: "AC" | "EP" | "PPI";
  primeiraFase: number; // numero de questões acertadas / 90
  segundaFase: {
    dia1: number;
    dia2: number;
    redacao: number;
  };
  classificação?: number;
  chamada: number;
  ano: number;
};

export const notaFuvestValidate = (nota: NotaFuvest): string | null => {
  if (!["AC", "EP", "PPI"].includes(nota.modalidade))
    return "Modalidade invalida";

  if (nota.primeiraFase > 1) return "Normalizar nota da primeira fase";

  if (nota.segundaFase.dia1 > 1) return "Normalizar nota da segunda fase dia1";

  if (nota.segundaFase.dia2 > 1) return "Normalizar nota da segunda fase dia2";

  if (nota.segundaFase.redacao > 1)
    return "Normalizar nota da segunda fase redacao";

  return null;
};

export const notaFinalFuvest = (nota: NotaFuvest): number =>
  (nota.primeiraFase + nota.segundaFase.dia1 + nota.segundaFase.dia2) / 3;

export const generatePath = (nota: NotaFuvest): string =>
  `fuvest/${nota.ano}/${nota.instituto}/${nota.curso}`;

export const generateNotaJson = (nota: NotaFuvest): string =>
  JSON.stringify(nota);
