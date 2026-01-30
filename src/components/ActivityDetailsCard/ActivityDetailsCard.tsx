import styles from './styles.module.css'

type ActivityInfo = {
  atividadeNome: string
  comunidadeNome: string
  professorNome: string
  dataInicio: string
  dataFim: string
  conteudo: string
  pdfCaminho?: string
}

type ResolucaoInfo = {
  alunoNome: string
  dataEnvio: string
  conteudo: string
  pdfCaminho?: string
}

interface ActivityDetailsCardProps {
  atividade: ActivityInfo
  resolucao?: ResolucaoInfo
}

const ActivityDetailsCard = ({ atividade, resolucao }: ActivityDetailsCardProps) => {
  return (
    <section className={styles.card}>
      <header className={styles.cardHeader}>
        <span className={styles.tag}>Descrição da atividade</span>
      </header>

      <hr className={styles.divider} />

      <div className={styles.infoGrid}>
        <strong>Atividade:</strong>
        <span>{atividade.atividadeNome}</span>

        <strong>Comunidade:</strong>
        <span>{atividade.comunidadeNome}</span>

        <strong>Professor responsável:</strong>
        <span>{atividade.professorNome}</span>

        <strong>Período:</strong>
        <span>
          {atividade.dataInicio} até {atividade.dataFim}
        </span>
      </div>

      <hr className={styles.divider} />

      <p className={styles.descricao}>{atividade.conteudo}</p>

      {true && (
        <a
          href={atividade.pdfCaminho}
          className={styles.download}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-solid fa-file-arrow-down" />
          Baixar PDF da atividade
        </a>
      )}

      {resolucao && (
        <>
          <hr className={styles.divider} />

          <header className={styles.cardHeader}>
            <span className={styles.tag}>Resolução do aluno</span>
          </header>

          <p className={styles.descricao}>{resolucao.conteudo}</p>

          <div className={styles.infoGrid}>
            <strong>Aluno:</strong>
            <span>{resolucao.alunoNome}</span>

            <strong>Data de envio:</strong>
            <span>{resolucao.dataEnvio}</span>
          </div>

          {true && (
            <a
              href={resolucao.pdfCaminho}
              className={styles.download}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-file-arrow-down" />
              Baixar PDF da resolução
            </a>
          )}
        </>
      )}
    </section>
  )
}

export default ActivityDetailsCard
