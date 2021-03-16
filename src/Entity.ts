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
    enem: NotaEnemEntity[];
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

export type NotaEnemEntity = {
  modalidade: "AC" | "EP" | "PPI";
  opção: number;
  lista_de_espera: "N";
  ciencias: number;
  matematica: number;
  linguas: number;
  sociais: number;
  redação: number;
  redação_c1: number;
  redação_c2: number;
  redação_c3: number;
  redação_c4: number;
  redação_c5: number;
  final: number;
  ano: number;
  id: string;
};
