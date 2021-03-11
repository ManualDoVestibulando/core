// Notas do vestibulas da fuvest
export type NotaFuvest = {
  campus: string
  unidade: string;
  curso: string;
  modalidade: "AC" | "EP" | "PPI";
  classificação?: number;
  fase1: number;
  dia1: number;
  dia2: number;
  redação: number;
  ano: number;
  final: number;
};

export const notaFuvestValidate = (nota: NotaFuvest): string | null => {
if (["AC", "EP", "PPI"].indexOf(nota.modalidade) == -1)
    return "Modalidade invalida";

  return null;
};

export const notaFinalFuvest = (nota: NotaFuvest): number => nota.final

export const generatePath = (_: NotaFuvest): string => `fuvest`;

export const generateNotaJson = (nota: NotaFuvest): string =>
  JSON.stringify(nota);
