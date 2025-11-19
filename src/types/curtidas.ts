export interface Curtida {
  id: string;
  userId: string;
  postId: string | null;
  respostaId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CurtidaDto {
  userId: string;
  postId?: string;      
  respostaId?: string;  
}
