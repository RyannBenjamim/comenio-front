import styles from './styles.module.css'

const CardPostSkeleton = ({ comment }: { comment?: boolean }) => {
  return (
    <div className={`${comment ? styles.card_comment : styles.card}`}>
      <div className={styles.line01}>
        <div className={styles.infos}>
          <div className={`${styles.skeleton} ${styles.avatar}`} />
          <div className={`${styles.skeleton} ${styles.username}`} />
          <div className={`${styles.skeleton} ${styles.nickname}`} />
          <p className={styles.divider}>•</p>
          <div className={`${styles.skeleton} ${styles.badge}`} />
          <p className={styles.divider}>•</p>
          <div className={`${styles.skeleton} ${styles.time}`} />
        </div>

        <div className={`${styles.skeleton} ${styles.menu}`} />
      </div>

      <div className={`${styles.skeleton} ${styles.text}`} />
      <div className={`${styles.skeleton} ${styles.text}`} />

      <div className={`${styles.skeleton} ${styles.picture}`}></div>

      <div className={styles.line02}>
        <div className={styles.icon_box}>
          <div className={`${styles.skeleton} ${styles.icon}`} />
          <div className={`${styles.skeleton} ${styles.number}`}></div>
        </div>
        <div className={styles.icon_box}>
          <div className={`${styles.skeleton} ${styles.icon}`} />
          <div className={`${styles.skeleton} ${styles.number}`}></div>
        </div>
      </div>
    </div>
  )
}

export default CardPostSkeleton
