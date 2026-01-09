import type { Curtida, CurtidaDto } from "../../types/curtidas";
import { genericRequest } from "../../utils/genericRequest";

export function like(data: CurtidaDto) {
  return genericRequest('/api/posts/curtidas/like', 'POST', data);
}

export function unlike(data: CurtidaDto) {
  return genericRequest('/api/posts/curtidas/unlike', 'POST', data);
}

export function getLikes(postId?: string, respostaId?: string) {
  const params = new URLSearchParams();

  if (postId) params.append('postId', postId);
  if (respostaId) params.append('respostaId', respostaId);

  const query = params.toString();
  const url = query ? `/api/posts/curtidas?${query}` : '/api/posts/curtidas';

  return genericRequest<{ likes: Curtida[]; totalLikes: number }>(url, 'GET');
}
