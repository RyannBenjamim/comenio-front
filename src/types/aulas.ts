export interface Aula {
  id: string;
  professorId: string;
  turmaId: string;
  materiaId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAula {
  professorId: string;
  turmaId: string;
  materiaId: string;
}

export type UpdateAula = Partial<CreateAula>;
