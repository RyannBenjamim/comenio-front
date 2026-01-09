import type { Resposta, CreateResposta, UpdateResposta } from "../../types/respostas";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateResposta) {
  return genericRequest<Resposta>('/api/posts/respostas', 'POST', data);
}

export function findAll(postId?: string, respostaId?: string) {
  const params = new URLSearchParams();

  if (postId) params.append('postId', postId);
  if (respostaId) params.append('respostaId', respostaId);

  const query = params.toString();
  const url = query ? `/api/posts/respostas?${query}` : '/api/posts/respostas';

  return genericRequest<Resposta[]>(url, 'GET');
}

export function findOne(id: string) {
  return genericRequest<Resposta>(`/api/posts/respostas/${id}`, 'GET');
}

export function update(id: string, data: UpdateResposta) {
  return genericRequest<Resposta>(`/api/posts/respostas/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Resposta>(`/api/posts/respostas/${id}`, 'DELETE');
}
