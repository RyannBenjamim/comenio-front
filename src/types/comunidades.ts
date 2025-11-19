export interface Comunidade {
  id: string;
  titulo: string;
  fotoCaminho: string | null;
  aulaId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateComunidade {
  titulo: string;
  fotoCaminho?: string;
  aulaId: string;
}

export type UpdateComunidade = Partial<CreateComunidade>;
