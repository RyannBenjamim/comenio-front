import type { Usuario, CreateUsuario, UpdateUsuario } from "../../types/usuarios";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateUsuario) {
  return genericRequest<Usuario>('/usuarios', 'POST', data);
}

export function findAll() {
  return genericRequest<Usuario[]>('/usuarios', "GET");
}

export function findOne(id: string) {
  return genericRequest<Usuario>(`/usuarios/${id}`, 'GET',);
}

export function update(id: string, data: UpdateUsuario) {
  return genericRequest<Usuario>(`/usuarios/${id}`, 'PATCH', data);
}

export function deleteMyAccount() {
  return genericRequest<Usuario>('/usuarios/me', 'DELETE');
}
