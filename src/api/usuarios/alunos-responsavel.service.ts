import type { AlunosResponsavel, RelacaoDto } from "../../types/alunos-responsaveis";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: RelacaoDto) {
  return genericRequest<AlunosResponsavel>('/usuarios/alunos-responsavel', 'POST', data);
}

export function findAll(responsavelId?: string, alunoId?: string) {
  const params = new URLSearchParams();

  if (responsavelId) params.append('responsavelId', responsavelId);
  if (alunoId) params.append('alunoId', alunoId);

  const query = params.toString();
  const url = query ? `/usuarios/alunos-responsavel?${query}` : '/usuarios/alunos-responsavel';

  return genericRequest<AlunosResponsavel[]>(url, 'GET');
}

export function findOne(data: RelacaoDto) {
  return genericRequest<AlunosResponsavel>('/usuarios/alunos-responsavel/find', 'POST', data);
}

export function remove(data: RelacaoDto) {
  return genericRequest<AlunosResponsavel>('/usuarios/alunos-responsavel/remove', 'POST', data);
}
