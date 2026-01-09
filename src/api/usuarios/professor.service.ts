import type { Professor, CreateProfessor, UpdateProfessor } from "../../types/professores";
import { genericRequest } from "../../utils/genericRequest";

export function createProfessor(data: CreateProfessor) {
  return genericRequest<Professor>("/api/usuarios/professores", "POST", data);
}

export function update(id: string, data: UpdateProfessor) {
  return genericRequest<Professor>(`/api/usuarios/moderadores/${id}`, "PATCH", data);
}