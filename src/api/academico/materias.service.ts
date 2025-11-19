import type { Materia, CreateMateria, UpdateMateria } from "../../types/materias";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateMateria) {
  return genericRequest<Materia>('/materias', 'POST', data);
}

export function findAll() {
  return genericRequest<Materia[]>('/materias', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Materia>(`/materias/${id}`, 'GET');
}

export function update(id: string, data: UpdateMateria) {
  return genericRequest<Materia>(`/materias/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Materia>(`/materias/${id}`, 'DELETE');
}
