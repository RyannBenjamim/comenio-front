import type { ApiResponse } from "../../types/ApiResponse";
import type { 
  Resposta, 
  CreateRespostaWithFile, 
  UpdateResposta 
} from "../../types/respostas";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateRespostaWithFile) {
  if (!data.image) {
    return genericRequest<ApiResponse<Resposta>>(
      "/api/respostas",
      "POST",
      data
    );
  }

  const formData = new FormData();

  formData.append("conteudo", data.conteudo);

  if (data.postId) {
    formData.append("postId", data.postId);
  }

  if (data.respostaId) {
    formData.append("respostaId", data.respostaId);
  }

  formData.append("foto", data.image);

  return genericRequest<ApiResponse<Resposta>>(
    "/api/respostas",
    "POST",
    formData
  );
}

export function findAll(postId?: string, respostaId?: string) {
  const params = new URLSearchParams();

  if (postId) params.append('postId', postId);
  if (respostaId) params.append('respostaId', respostaId);

  const query = params.toString();
  const url = query ? `/api/respostas?${query}` : '/api/respostas';

  return genericRequest<ApiResponse<Resposta[]>>(url, 'GET');
}

export function findAllByUserId() {
  return genericRequest<ApiResponse<Resposta[]>>('/api/respostas/me', 'GET');
}

export function findOne(id: string) {
  return genericRequest<ApiResponse<Resposta[]>>(`/api/respostas/${id}`, 'GET');
}

export function update(id: string, data: UpdateResposta) {
  return genericRequest<ApiResponse<Resposta[]>>(`/api/respostas/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<ApiResponse<Resposta[]>>(`/api/respostas/${id}`, 'DELETE');
}
