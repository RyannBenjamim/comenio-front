export interface Atividade {
  id: string;
  titulo: string;
  conteudo: string;
  pdfCaminho: string | null;
  dataInicio: string;
  dataFim: string;
  comunidadeId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAtividade {
  titulo: string;
  conteudo: string;
  pdfCaminho?: string;
  dataInicio: string;
  dataFim: string;
  comunidadeId: string;
}

export type UpdateAtividade = Partial<CreateAtividade>;
