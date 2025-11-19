export const Periodo = {
  MANHA: "MANHA",
  TARDE: "TARDE",
  NOITE: "NOITE"
} as const;

export type Periodo = typeof Periodo[keyof typeof Periodo];

export interface Turma {
  id: string;
  titulo: string;
  periodo: Periodo;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTurma {
  titulo: string;
  periodo: Periodo;
}

export type UpdateTurma = Partial<CreateTurma>;
