import type { Comunidade, CreateComunidade, UpdateComunidade } from "../types/comunidades";
import { genericRequest } from "../utils/genericRequest";
import type { ApiResponse } from "../types/ApiResponse";

export function create(data: CreateComunidade) {
  return genericRequest<Comunidade>('/api/comunidades', 'POST', data);
}

export function findAll() {
  return genericRequest<ApiResponse<Comunidade[]>>('/api/comunidades', 'GET');
}

export function getStudentCommunities() {
  return genericRequest<ApiResponse<{ id: string, titulo: string }[]>>('/api/comunidades/aluno', 'GET');
}

export function getTeacherCommunities() {
  return genericRequest<ApiResponse<{ id: string, titulo: string }[]>>('/api/comunidades/professor', 'GET');
}

export function findOne(id: string) {
  return genericRequest<ApiResponse<Comunidade>>(`/api/comunidades/${id}`, 'GET');
}

export function update(id: string, data: UpdateComunidade) {
  return genericRequest<ApiResponse<Comunidade>>(`/api/comunidades/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<ApiResponse<Comunidade>>(`/api/comunidades/${id}`, 'DELETE');
}
