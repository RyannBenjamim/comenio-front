export interface Resolucao {
  id: string;
  alunoId: string;
  atividadeId: string;
  conteudo: string;
  pdfCaminho: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateResolucao {
  alunoId: string;
  atividadeId: string;
  conteudo: string;
  pdfCaminho?: string;
}

export type UpdateResolucao = Partial<CreateResolucao>;
