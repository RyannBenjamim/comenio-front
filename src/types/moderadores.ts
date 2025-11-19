export interface Moderador {
  userId: string;
  setor: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateModerador {
  userId: string;
  setor: string;
}

export type UpdateModerador = Partial<CreateModerador>;
