export interface Responsavel {
  userId: string;
  grauParentesco: string;
  cpf: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateResponsavel {
  userId: string;
  grauParentesco: string;
  cpf: string;
}

export type UpdateResponsavel = Partial<CreateResponsavel>;
