import type { Aluno, CreateAluno, UpdateAluno } from "../../types/alunos";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateAluno) {
  return genericRequest<Aluno>('/api/usuarios/alunos', 'POST', data);
}

export function update(id: string, data: UpdateAluno) {
  return genericRequest<Aluno>(`/api/usuarios/alunos/${id}`, 'PATCH', data);
}
