import type { Turma, CreateTurma, UpdateTurma } from "../../types/turmas";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateTurma) {
  return genericRequest<Turma>('/turmas', 'POST', data);
}

export function findAll() {
  return genericRequest<Turma[]>('/turmas', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Turma>(`/turmas/${id}`, 'GET');
}

export function update(id: string, data: UpdateTurma) {
  return genericRequest<Turma>(`/turmas/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Turma>(`/turmas/${id}`, 'DELETE');
}
