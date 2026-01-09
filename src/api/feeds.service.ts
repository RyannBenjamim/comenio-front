import type { Feed, CreateFeed, UpdateFeed } from "../types/feeds";
import { genericRequest } from "../utils/genericRequest";

export function create(data: CreateFeed) {
  return genericRequest<Feed>('/api/feeds', 'POST', data);
}

export function findAll() {
  return genericRequest<Feed[]>('/api/feeds', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Feed>(`/api/feeds/${id}`, 'GET');
}

export function update(id: string, data: UpdateFeed) {
  return genericRequest<Feed>(`/api/feeds/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Feed>(`/api/feeds/${id}`, 'DELETE');
}
