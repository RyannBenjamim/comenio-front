export interface RespostaAutor {
  primeiroNome: string;
  nickname: string;
  fotoPerfilUrl: string;
}

export const RespostaAutorDefault = {
  primeiroNome: 'Desconhecido',
  nickname: 'Desconhecido',
  fotoPerfilUrl: null,
}

export interface RespostaUsuarioReferencia {
  id: string;
  nickname: string;
}

export interface RespostaContextoItem {
  id: string;
  user: RespostaUsuarioReferencia | null;
}

export interface RespostaComunidade {
  id: string;
  titulo: string;
}

export const RespostaComunidadeDefault = {
  id: '0',
  titulo: 'Desconhecida'
}

export interface RespostaFeed {
  id: string;
  titulo: string;
}

export interface RespostaContexto {
  postAutor: RespostaContextoItem | null;
  respostaPaiAutor: RespostaContextoItem | null;
  comunidade: RespostaComunidade; // ajustar para esse formato depois: RespostaComunidade | null
  feed: RespostaFeed | null;
}

export interface Resposta {
  id: string;
  conteudo: string;
  fotoUrl: string | null;
  userId: string;
  createdAt: string;
  updatedAt: string;

  autor: RespostaAutor;
  contexto: RespostaContexto;
}

export interface CreateResposta {
  conteudo: string;
  postId?: string;
  respostaId?: string;
}

export interface CreateRespostaWithFile extends CreateResposta {
  image?: File;
}

export type UpdateResposta = Partial<CreateResposta>;

