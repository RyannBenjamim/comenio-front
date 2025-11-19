export interface Instituicao {
  id: string;
  nome: string;
  telefone: string;
  cnpj: string;
  endereco: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateInstituicao {
  nome: string;
  telefone: string;
  cnpj: string;
  endereco: string;
}

export type UpdateInstituicao = Partial<CreateInstituicao>;
