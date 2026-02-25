import axios from 'axios';

export async function signin(email: string, senha: string) {
  const response = await axios.post(
    'https://comenio-api.vercel.app/api/auth/signin', 
    { email, senha }, 
    { headers: { 'Content-Type': 'application/json' } }
  );

  return response.data
}
