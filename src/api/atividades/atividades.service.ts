import type { Atividade, CreateAtividade, UpdateAtividade } from "../../types/atividades";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateAtividade) {
  return genericRequest<Atividade>('/atividades', 'POST', data);
}

export function findAll() {
  return genericRequest<Atividade[]>('/atividades', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Atividade>(`/atividades/${id}`, 'GET');
}

export function update(id: string, data: UpdateAtividade) {
  return genericRequest<Atividade>(`/atividades/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Atividade>(`/atividades/${id}`, 'DELETE');
}
