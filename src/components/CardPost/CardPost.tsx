import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import type { ComunidadeIdTitulo, User } from '../../types/posts'
import { formatPostDate } from '../../utils/formatPostDate'
import { useImageLoader } from '../../hooks/useImageLoader'
import Loader from '../Loader/Loader'

interface CardPostProps {
  id: string
  conteudo: string
  img?: string
  createdAt: string
  user: User
  comunidade: ComunidadeIdTitulo

  type: number, // 0 -> normal post | 1 expanded post
  comment?: boolean // true -> is a comment
  author?: string
  link?: string
}

const CardPost = ({
  conteudo,
  img,
  createdAt,
  user,
  comunidade,
  type,
  comment,
  author,
  link
}: CardPostProps) => {
  const { 
    img: profileImg, 
    loadingImg: loadingProfileImg 
  } = useImageLoader(user?.fotoPerfilUrl);
  
  const { 
    img: postImg, 
    loadingImg: loadingPostImg 
  } = useImageLoader(img);

  const cardLink = `/${user.nickname}/${link}`;

  return (
    <Link className={`${comment ? styles.card_comment : styles.card}`} to={cardLink}>
      {author &&
        <p className={styles.author_text}>
          Em resposta a <Link className={styles.author_name} to='/perfil'>@{author}</Link>
        </p>
      }

      <div className={styles.line01}>
        <div className={styles.infos}>
          <div className={styles.profile_picture}>
            {loadingProfileImg ? (
              <Loader />
            ) : (
              <div
                className={styles.img}
                style={{ backgroundImage: `url(${profileImg ?? '/images/avatar-default.png'})` }}
              ></div>
            )}
          </div>

          <Link to={`/perfil/${user.nickname}`}>
            <p className={styles.username}>{user.primeiroNome}</p>
          </Link>
          <Link to={`/perfil/${user.nickname}`}>
            <p>@{user.nickname}</p>
          </Link>
          <p className={styles.divider}>•</p>
          <Link className={styles.community_badge} to={`/comunidades/${comunidade.id}`}>
            <i className="fa-solid fa-users"></i>
            <span>{comunidade.titulo.split(' ')[0]}</span>
          </Link>
          <p className={styles.divider}>•</p>
          <p className={styles.time}>{formatPostDate(createdAt, 0)}</p>
        </div>

        <div className={styles.action_btn}>
          <i className="fa-solid fa-ellipsis"></i>
        </div>
      </div>

      <p className={styles.text_content}>
        {conteudo}
      </p>

      {postImg && (
        <div className={styles.media}>
          {loadingPostImg ? (
            <Loader />
          ) : (
            <img
              src={postImg ?? img}
              className={styles.post_picture}
              alt="Imagem do post"
            />
          )}
        </div>
      )}

      {type === 1 && (
        <p className={styles.time_details}>
          {formatPostDate(createdAt, 1)}
        </p>
      )}

      <div className={styles.line02}>
        <div className={styles.like}>
          <i className="fa-regular fa-heart"></i>
          <p className={styles.total_likes}>0</p>
        </div>

        <Link
          className={styles.comment}
          to={cardLink ?? '#'}
        >
          <i className="fa-regular fa-comment"></i>
          <p className={styles.total_comments}>0</p>
        </Link>
      </div>
    </Link>
  )
}

export default CardPost
