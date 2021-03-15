export type ManualDoVestibulandoEntity = {
  slogan: string;
  campus: CampusEntity[];
};

export type CampusEntity = {
  nome: string;
  descrição: string;
  institutos: InstitutoEntity[];
};

export type InstitutoEntity = {
  nome: string;
  sigla: string;
  descrição: string;
  cursos: CursoEntity[];
};

export type CursoEntity = {
  nome: string;
  descrição: string;
  notas: {
    fuvest: NotaFuvestEntity[];
  };
};

export type NotaFuvestEntity = {
  id: string;
  modalidade: "AC" | "EP" | "PPI";
  classificação?: number;
  fase1: number;
  dia1: number;
  dia2: number;
  redação: number;
  ano: number;
  final: number;
};
