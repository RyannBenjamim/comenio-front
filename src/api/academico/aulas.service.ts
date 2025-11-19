import type { Aula, CreateAula, UpdateAula } from "../../types/aulas";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateAula) {
  return genericRequest<Aula>('/aulas', 'POST', data);
}

export function findAll() {
  return genericRequest<Aula[]>('/aulas', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Aula>(`/aulas/${id}`, 'GET');
}

export function update(id: string, data: UpdateAula) {
  return genericRequest<Aula>(`/aulas/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Aula>(`/aulas/${id}`, 'DELETE');
}
