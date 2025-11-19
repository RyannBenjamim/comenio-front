import type { Feed, CreateFeed, UpdateFeed } from "../types/feeds";
import { genericRequest } from "../utils/genericRequest";

export function create(data: CreateFeed) {
  return genericRequest<Feed>('/feeds', 'POST', data);
}

export function findAll() {
  return genericRequest<Feed[]>('/feeds', 'GET');
}

export function findOne(id: string) {
  return genericRequest<Feed>(`/feeds/${id}`, 'GET');
}

export function update(id: string, data: UpdateFeed) {
  return genericRequest<Feed>(`/feeds/${id}`, 'PATCH', data);
}

export function remove(id: string) {
  return genericRequest<Feed>(`/feeds/${id}`, 'DELETE');
}
