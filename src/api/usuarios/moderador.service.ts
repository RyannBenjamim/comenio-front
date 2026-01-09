import type { Moderador, CreateModerador, UpdateModerador } from "../../types/moderadores";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateModerador) {
  return genericRequest<Moderador>("/api/usuarios/moderadores", "POST", data);
}

export function update(id: string, data: UpdateModerador) {
  return genericRequest<Moderador>(`/api/usuarios/moderadores/${id}`, "PATCH", data);
}
