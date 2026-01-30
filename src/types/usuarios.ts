const Cargo = {
  ADMIN: 'SUPERADMIN',
  MODERADOR: 'MODERADOR',
  PROFESSOR: 'PROFESSOR',
  ALUNO: 'ALUNO',
  RESPONSAVEL: 'RESPONSAVEL'
} as const;

const StatusContrato = {
  ATIVO: 'ATIVO',
  SUSPENSO: 'SUSPENSO',
  AFASTADO: 'AFASTADO',
  ENCERRADO: 'ENCERRADO'
} as const

export type Cargo = typeof Cargo[keyof typeof Cargo];

export type StatusContrato = typeof StatusContrato[keyof typeof StatusContrato];

export interface Usuario {
  id: string;
  instituicaoId: string;
  primeiroNome: string;
  sobrenome: string;
  nickname: string,
  bio: string,
  email: string;
  dataNascimento: string;
  telefone: string;
  fotoPerfilCaminho?: string;
  fotoPerfilUrl?: string;
  cargo: Cargo;
  createdAt: string;
  updatedAt: string;
  aluno?: {
    matricula: string,
    turmaId: string,
    statusMatricula: string,
  },
  moderador?: { setor: string },
  professor?: {
    matricula: string,
    statusContrato: StatusContrato,
    cargaHoraria: number,
  },
  responsavel?: {
    grauParentesco: string,
    cpf: string
  }
}

export interface MyProfile {
  id: string;
  primeiroNome: string;
  sobrenome: string;
  bio?: string,
  nickname: string | null;
  fotoPerfilUrl?: string;
  aluno?: {
    turma?: {
      titulo: string;
    };
  } | null;
};

export interface CreateUsuario {
  instituicaoId: string;
  primeiroNome: string;
  sobrenome: string;
  email: string;
  senha: string
  dataNascimento: string;
  telefone: string;
  cargo: Cargo;
}

export type UpdateUsuario = Partial<CreateUsuario>;