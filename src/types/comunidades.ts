export interface Comunidade {
  id: string;
  titulo: string;
  aulaId: string;
  professor: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateComunidade {
  titulo: string;
  aulaId: string;
}

export type UpdateComunidade = Partial<CreateComunidade>;
