import type { Post, CreatePost, UpdatePost } from "../../types/posts";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreatePost) {
  return genericRequest<Post>('/posts', 'POST', data);
}

export function findAll(comunidadeId?: string, feedId?: string) {
  const params = new URLSearchParams();

  if (comunidadeId) params.append('comunidadeId', comunidadeId);
  if (feedId) params.append('feedId', feedId);

  const query = params.toString();
  const url = query ? `/posts?${query}` : '/posts';

  return genericRequest<Post[]>(url, 'GET');
}

export function findOne(id: string) {
  return genericRequest<Post>(`/posts/${id}`, 'GET');
}

export function update(id: string, data: UpdatePost) {
  return genericRequest<Post>(`/posts/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Post>(`/posts/${id}`, 'DELETE');
}
