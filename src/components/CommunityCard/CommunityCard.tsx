import styles from './styles.module.css'
import { Link } from 'react-router-dom'

interface CommunityCardProps {
  id: string
  communityName: string
  professorName: string
  pendingActivities: number
}

const CommunityCard = ({
  id,
  communityName,
  professorName,
  pendingActivities
}: CommunityCardProps) => {
  return (
    <Link to={`/atividades/${id}`} className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.community_name}>{communityName}</h2>

        {pendingActivities > 0 && (
          <div className={styles.badge}>
            <i className="ph ph-clipboard-text"></i>
            <span>Pendentes</span>
            <strong>{pendingActivities}</strong>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <p className={styles.label}>Professor responsável</p>
        <p className={styles.professor}>{professorName}</p>
      </div>

      <div className={styles.footer}>
        <i className="ph ph-arrow-right"></i>
        <span>Ver detalhes</span>
      </div>
    </Link>
  )
}

export default CommunityCard
