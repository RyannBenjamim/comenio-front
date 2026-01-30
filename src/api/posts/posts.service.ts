import type { ApiResponse } from "../../types/ApiResponse";
import type { Post, CreatePostWithFile, UpdatePost } from "../../types/posts";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreatePostWithFile) {
  if (!data.image) {
    return genericRequest<ApiResponse<Post>>(
      "/api/posts",
      "POST",
      data
    );
  }

  const formData = new FormData();

  formData.append("conteudo", data.conteudo);

  if (data.feedId) {
    formData.append("feedId", data.feedId);
  }

  if (data.comunidadeId) {
    formData.append("comunidadeId", data.comunidadeId);
  }

  formData.append("foto", data.image);

  return genericRequest<ApiResponse<Post>>(
    "/api/posts",
    "POST",
    formData
  );
}

export function findAll(comunidadeId?: string, feedId?: string) {
  const params = new URLSearchParams();

  if (comunidadeId) params.append('comunidadeId', comunidadeId);
  if (feedId) params.append('feedId', feedId);

  const query = params.toString();
  const url = query ? `/api/posts?${query}` : '/posts';

  return genericRequest<ApiResponse<Post[]>>(url, 'GET');
}

export function findAllMergedPosts() {
  return genericRequest<ApiResponse<Post[]>>('/api/posts/merged', 'GET');
}

export function findUserPostsForFeed() {
  return genericRequest<ApiResponse<Post[]>>('/api/posts/me', 'GET');
}

export function findUserPostsForGrid() {
  return genericRequest<ApiResponse<Pick<Post, 'id' | 'fotoUrl'>[]>>('/api/posts/me/photos', 'GET');
}

export function findUserProfilePostsForFeed() {
  return genericRequest<ApiResponse<Post[]>>('/api/posts/users/:userId', 'GET');
}

export function findUserProfilePostsForGrid() {
  return genericRequest<ApiResponse<Pick<Post, 'id' | 'fotoUrl'>[]>>('/api/posts/users/photos', 'GET');
}

export function findOne(id: string) {
  return genericRequest<ApiResponse<Post>>(`/api/posts/${id}`, 'GET');
}

export function update(id: string, data: UpdatePost) {
  return genericRequest<ApiResponse<Post>>(`/api/posts/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<ApiResponse<Post>>(`/api/posts/${id}`, 'DELETE');
}
