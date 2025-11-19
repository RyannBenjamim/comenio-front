import type { Correcao, CreateCorrecao, UpdateCorrecao } from "../../types/correcoes";
import { genericRequest } from "../../utils/genericRequest";

export function create(data: CreateCorrecao) {
  return genericRequest<Correcao>('/atividades/correcoes', 'POST', data);
}

export function findAll() {
  return genericRequest<Correcao[]>('/atividades/correcoes', "GET");
}

export function findOne(id: string) {
  return genericRequest<Correcao>(`/atividades/correcoes/${id}`, "GET");
}

export function update(id: string, data: UpdateCorrecao) {
  return genericRequest<Correcao>(`/atividades/correcoes/${id}`, "PATCH", data);
}

export function remove(id: string) {
  return genericRequest<Correcao>(`/atividades/correcoes/${id}`, "DELETE");
}
