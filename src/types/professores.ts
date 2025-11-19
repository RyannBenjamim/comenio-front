export const StatusContrato = {
  ATIVO: "ATIVO",
  SUSPENSO: "SUSPENSO",
  AFASTADO: "AFASTADO",
  ENCERRADO: "ENCERRADO"
} as const;

export type StatusContrato = typeof StatusContrato[keyof typeof StatusContrato];

export interface Professor {
  userId: string; 
  matricula: string | null;
  statusContrato: StatusContrato;
  cargaHoraria: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProfessor {
  userId: string;
  matricula?: string;
  statusContrato: StatusContrato;
  cargaHoraria: number;
}

export type UpdateProfessor = Partial<CreateProfessor>;
