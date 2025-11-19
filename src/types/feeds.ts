import type { Cargo } from "./usuarios"; 

export interface Feed {
  id: string;
  titulo: string;
  tipoPerfil: Cargo;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFeed {
  titulo: string;
  tipoPerfil: Cargo;
}

export type UpdateFeed = Partial<CreateFeed>;
