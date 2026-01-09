import type { Responsavel, CreateResponsavel, UpdateResponsavel } from "../../types/responsaveis";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateResponsavel) {
  return genericRequest<Responsavel>('/api/usuarios/responsaveis', 'POST', data);
}

export function update(id: string, data: UpdateResponsavel) {
  return genericRequest<Responsavel>(`/api/usuarios/responsaveis/${id}`, 'PATCH', data);
}
