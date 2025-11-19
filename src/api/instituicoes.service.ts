import type { Instituicao, CreateInstituicao, UpdateInstituicao } from "../types/instituicoes";
import { genericRequest } from "../utils/genericRequest";

export function create(data: CreateInstituicao) {
  return genericRequest<Instituicao>('/instituicoes', 'POST', data);
}

export function findAll() {
  return genericRequest<Instituicao[]>('/instituicoes', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Instituicao>(`/instituicoes/${id}`, 'GET');
}

export function update(id: string, data: UpdateInstituicao) {
  return genericRequest<Instituicao>(`/instituicoes/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Instituicao>(`/instituicoes/${id}`, 'DELETE');
}
