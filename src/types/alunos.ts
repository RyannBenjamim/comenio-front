export interface Aluno {
  userId: string;
  matricula: string | null;
  turmaId: string;
  statusMatricula: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAluno {
  userId: string;
  matricula?: string;
  turmaId: string;
  statusMatricula: string;
}

export type UpdateAluno = Partial<CreateAluno>;

