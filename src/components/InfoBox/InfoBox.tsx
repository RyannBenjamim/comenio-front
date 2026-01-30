import styles from './styles.module.css'

interface InfoBoxProps {
  icon: string,
  title: string,
  subtitle: string,
  totalComunitities?: number | null
}

const InfoBox = ({
  icon,
  title,
  subtitle,
  totalComunitities
}: InfoBoxProps) => {
  return (
    <div className={styles.info_box}>
      <div className={styles.info_icon}>
        <i className={icon}></i>
      </div>

      <div className={styles.info_text}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {totalComunitities && (
        <span className={styles.info_badge}>
          {totalComunitities}
        </span>
      )}
    </div>
  )
}

export default InfoBox