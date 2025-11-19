import { api } from "../api/api";
import { getHeaders } from "./getHeaders";

export const genericRequest = async <T>(url: string, method: string, data?: any): Promise<T> => {
  try {
    const response = await api.request({
      url,
      method,
      data,
      headers: getHeaders()
    });
    return response.data;
  } catch (error: any) {
    const msg = error?.response?.data?.error || error.message || "Erro desconhecido";
    throw new Error(msg);
  }
}