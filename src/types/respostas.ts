export interface Resposta {
  id: string;
  conteudo: string;
  userId: string;
  postId: string | null;
  respostaId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateResposta {
  conteudo: string;
  userId: string;
  postId?: string;
  respostaId?: string; 
}

export type UpdateResposta = Partial<CreateResposta>;
