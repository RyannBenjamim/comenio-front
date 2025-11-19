export interface Correcao {
  id: string;
  resolucaoId: string;
  professorId: string;
  conteudo: string;
  pdfCaminho: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCorrecao {
  resolucaoId: string;
  professorId: string;
  conteudo: string;
  pdfCaminho?: string;
}

export type UpdateCorrecao = Partial<CreateCorrecao>;
