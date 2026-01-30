import type { ApiResponse } from "../../types/ApiResponse";
import type { Resposta, CreateResposta, UpdateResposta } from "../../types/respostas";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateResposta) {
  return genericRequest<ApiResponse<Resposta[]>>('/api/respostas', 'POST', data);
}

export function findAll(postId?: string, respostaId?: string) {
  const params = new URLSearchParams();

  if (postId) params.append('postId', postId);
  if (respostaId) params.append('respostaId', respostaId);

  const query = params.toString();
  const url = query ? `/api/respostas?${query}` : '/api/respostas';

  return genericRequest<ApiResponse<Resposta[]>>(url, 'GET');
}

export function findOne(id: string) {
  return genericRequest<ApiResponse<Resposta[]>>(`/api/respostas/${id}`, 'GET');
}

export function update(id: string, data: UpdateResposta) {
  return genericRequest<ApiResponse<Resposta[]>>(`/api/respostas/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<ApiResponse<Resposta[]>>(`/api/respostas/${id}`, 'DELETE');
}
