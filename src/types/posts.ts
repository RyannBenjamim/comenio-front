export interface Post {
  id: string;
  titulo: string;
  conteudo: string;
  fotoCaminho: string | null;
  userId: string;
  feedId: string | null;
  comunidadeId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePost {
  titulo: string;
  conteudo: string;
  fotoCaminho?: string;
  userId: string;
  feedId?: string;
  comunidadeId?: string;
}

export type UpdatePost = Partial<CreatePost>;
