import type { Comunidade, CreateComunidade, UpdateComunidade } from "../types/comunidades";
import { genericRequest } from "../utils/genericRequest";

export function create(data: CreateComunidade) {
  return genericRequest<Comunidade>('/comunidades', 'POST', data);
}

export function findAll() {
  return genericRequest<Comunidade[]>('/comunidades', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Comunidade>(`/comunidades/${id}`, 'GET');
}

export function update(id: string, data: UpdateComunidade) {
  return genericRequest<Comunidade>(`/comunidades/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Comunidade>(`/comunidades/${id}`, 'DELETE');
}
