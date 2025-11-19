import type { Resolucao, CreateResolucao, UpdateResolucao } from "../../types/resolucoes";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateResolucao) {
  return genericRequest<Resolucao>('/atividades/resolucoes', 'POST', data);
}

export function findAll() {
  return genericRequest<Resolucao[]>('/atividades/resolucoes', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Resolucao>(`/atividades/resolucoes/${id}`, 'GET');
}

export function update(id: string, data: UpdateResolucao) {
  return genericRequest<Resolucao>(`/atividades/resolucoes/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Resolucao>(`/atividades/resolucoes/${id}`, 'DELETE');
}
