import { genericRequest } from "../utils/genericRequest";

export function signin(email: string, senha: string) {
  return genericRequest<{ access_token: string }>(
    '/auth/signin',
    'POST',
    { email, senha }
  );
}
