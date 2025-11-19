const Cargo = {
  SUPERADMIN: 'SUPERADMIN',
  MODERADOR: 'MODERADOR',
  PROFESSOR: 'PROFESSOR',
  ALUNO: 'ALUNO',
  RESPONSAVEL: 'RESPONSAVEL'
} as const;

export type Cargo = typeof Cargo[keyof typeof Cargo];

export interface Usuario {
  id: string;
  instituicaoId: string;
  primeiroNome: string;
  sobrenome: string;
  email: string;
  dataNascimento: string;
  telefone: string;
  fotoPerfilCaminho?: string;
  cargo: Cargo;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUsuario {
  instituicaoId: string;
  primeiroNome: string;
  sobrenome: string;
  email: string;
  senha: string
  dataNascimento: string;
  telefone: string;
  fotoPerfilCaminho?: string;
  cargo: Cargo;
}

export type UpdateUsuario = Partial<CreateUsuario>;