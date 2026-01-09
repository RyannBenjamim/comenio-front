import styles from './styles.module.css'
import { Link } from "react-router-dom";

interface CardPostProps { 
  img?: string,  
  type: number, // 0 -> normal post | 1 expanded post
  comment?: boolean // true -> is a comment

  link?: string
}

const CardPost = ({ img, type, comment, link }: CardPostProps) => {
  return (
    <div className={`${comment ? styles.card_comment : styles.card}`}>
      <div className={styles.line01}>
        <div className={styles.infos}>
          <div
            className={styles.profile_picture}
            style={{ backgroundImage: `url(${'/images/minha-foto.jpg'})` }}
          ></div>
          <p className={styles.username}>Ryan Benjamim</p>
          <p>@theryanbenjamim</p>
          <p className={styles.divider}>•</p>
          <p className={styles.time}>40 min</p>
        </div>
        <div className={styles.action_btn}><i className="fa-solid fa-ellipsis"></i></div>
      </div>

      <p className={styles.text_content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {img ? 
        <div className={styles.media}>
          <img src={img} alt="post" className={styles.post_picture} />
        </div> : null
      }

      {type === 1 ? <p className={styles.time_details}>9:23 · 22 de dez de 2025</p> : null}

      <div className={styles.line02}>
        <div className={styles.like}>
          <i className="fa-regular fa-heart"></i>
          <p className={styles.total_likes}>30</p>
        </div>
        <Link className={styles.comment} to={link ? link : '/theryanbenjamim/posts/01'}>
          <i className="fa-regular fa-comment"></i>
          <p className={styles.total_comments}>10</p>
        </Link>
      </div>
    </div>
  )
}

export default CardPost