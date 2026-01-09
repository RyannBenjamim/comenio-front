import type { Usuario, CreateUsuario, UpdateUsuario } from "../../types/usuarios";
import type { ApiResponse } from "../../types/ApiResponse";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateUsuario) {
  return genericRequest<ApiResponse<Usuario>>('/api/usuarios', 'POST', data);
}

export function findAll() {
  return genericRequest<ApiResponse<Usuario[]>>('/api/usuarios', "GET");
}

export function findOne(id: string) {
  return genericRequest<ApiResponse<Usuario>>(`/api/usuarios/${id}`, 'GET');
}

export function update(id: string, data: UpdateUsuario) {
  return genericRequest<ApiResponse<Usuario>>(`/api/usuarios/${id}`, 'PATCH', data);
}

export function deleteMyAccount() {
  return genericRequest<ApiResponse<Usuario>>('/api/usuarios/me', 'DELETE');
}

export function getProfilePicture(id: string) {
  return genericRequest<ApiResponse<{ url: string }>>(`/api/usuarios/${id}/foto-perfil`, 'GET');
}
