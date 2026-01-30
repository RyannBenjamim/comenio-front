import type { Comunidade } from './comunidades';
import type { Feed } from './feeds';
import type { Usuario } from './usuarios';

export type User = Pick<
  Usuario,
  'primeiroNome' | 'nickname' | 'fotoPerfilUrl'
>;

export type ComunidadeIdTitulo = Pick<
  Comunidade,
  'id' | 'titulo'
>; 

export type FeedIdTitulo = Pick<
  Feed,
  'id' | 'titulo'
>; 

export interface Post {
  id: string;
  conteudo: string;
  fotoCaminho: string | null;
  fotoUrl: string | null;
  userId: string;
  feedId: string | null;
  comunidadeId: string | null;
  createdAt: string;
  updatedAt: string;
  user: User
  comunidade: ComunidadeIdTitulo
  feed: FeedIdTitulo
}

export interface CreatePost {
  conteudo: string;
  feedId?: string;
  comunidadeId?: string;
}

export interface CreatePostWithFile extends CreatePost {
  image?: File;
}

export type UpdatePost = Partial<CreatePost>;
