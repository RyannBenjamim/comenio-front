import type { Usuario } from './usuarios';

export type User = Pick<
  Usuario,
  'primeiroNome' | 'nickname' | 'fotoPerfilUrl'
>;

export interface Resposta {
  id: string;
  conteudo: string;
  userId: string;
  postId: string | null;
  respostaId: string | null;
  createdAt: string;
  updatedAt: string;
  user: User
}

export interface CreateResposta {
  conteudo: string;
  userId: string;
  postId?: string;
  respostaId?: string; 
}

export type UpdateResposta = Partial<CreateResposta>;
