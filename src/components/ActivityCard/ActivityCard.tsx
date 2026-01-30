import styles from './styles.module.css'
import { Link } from 'react-router-dom'

type ActivityCardType = 'atividade' | 'resolucao' | 'correcao'

interface ActivityCardProps {
  type: ActivityCardType
  titulo: string
  descricao?: string
  dataInicio?: string
  dataFim?: string
  alunoNome?: string 
  link: string
}

const ActivityCard = ({
  type,
  titulo,
  descricao,
  dataInicio,
  dataFim,
  alunoNome,
  link
}: ActivityCardProps) => {
  const getFooterText = () => {
    if (type === 'atividade') return 'Ver atividade';
    if (type === 'resolucao') return 'Ver resolução';
    if (type === 'correcao') return 'Ver correção';
  }

  return (
    <Link to={link} className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>{titulo}</h2>

        {type === 'atividade' && (
          <div className={styles.badge}>
            <i className="ph ph-calendar"></i>
            <span>Entrega</span>
            <strong>{dataFim}</strong>
          </div>
        )}

        {type !== 'atividade' && (
          <div className={`${styles.badge} ${styles[type]}`}>
            <span>{type === 'correcao' ? 'corrigida' : 'entregue'}</span>
          </div>
        )}
      </div>

      <div className={styles.content}>
        {descricao && <p className={styles.description}>{descricao}</p>}

        {type === 'atividade' && (
          <>
            <p className={styles.label}>Período</p>
            <p className={styles.text}>
              {dataInicio} → {dataFim}
            </p>
          </>
        )}

        {type !== 'atividade' && alunoNome && (
          <>
            <p className={styles.label}>Aluno</p>
            <p className={styles.text}>{alunoNome}</p>
          </>
        )}
      </div>

      <div className={styles.footer}>
        <span>{getFooterText()}</span>
      </div>
    </Link>
  )
}

export default ActivityCard
