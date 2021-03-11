export type ManualDoVestibulandoEntity = {
  index: IndexPageEntity;
  institutos: InstitutoEntity[];
};

export type IndexPageEntity = {
  slogan: string;
};

export type InstitutoEntity = {
  nome: string;
  sigla: string;
  campus: string;
  descrição: string;
  cursos: CursoEntity[];
};

export type CursoEntity = {
  nome: string;
  descrição: string;
  notas: {
    fuvest: NotaFuvestEntity;
  };
};

export type NotaFuvestEntity = {
  modalidade: "AC" | "EP" | "PPI";
  classificação?: number;
  fase1: number;
  dia1: number;
  dia2: number;
  redação: number;
  ano: number;
  final: number;
};
