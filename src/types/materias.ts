export const MateriaTipo = {
  EXATAS: "EXATAS",
  HUMANAS: "HUMANAS",
  NATUREZA: "NATUREZA",
  LINGUAGENS: "LINGUAGENS"
} as const;

export type MateriaTipo = typeof MateriaTipo[keyof typeof MateriaTipo];

export interface Materia {
  id: string;
  titulo: string;
  tipo: MateriaTipo;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMateria {
  titulo: string;
  tipo: MateriaTipo;
}

export type UpdateMateria = Partial<CreateMateria>;
