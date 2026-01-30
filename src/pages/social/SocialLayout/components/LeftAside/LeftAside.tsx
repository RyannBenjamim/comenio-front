import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { getStudentCommunities } from '../../../../../api/comunidades.service';
import { Link } from 'react-router-dom';

const links = [
  { name: "Página inicial", icon: "fa-solid fa-house", path: "" },
  { name: "Feed", icon: "fa-solid fa-rss", path: "feed" },
  { name: "Atividades", icon: "fa-solid fa-book", path: "atividades" },
  { name: "Perfil", icon: "fa-solid fa-circle-user", path: "perfil" },
  { name: "Ranking", icon: "fa-solid fa-ranking-star", path: "ranking" },
  { name: "Postar", icon: "fa-solid fa-plus", path: ""},
  { name: "Configurações", icon: "fa-solid fa-gear", path: "conta" },
]

interface Comunitites {
  id: string
  titulo: string
}

const LeftAside = () => {
  const [comunitities, setComunitities] = useState<Comunitites[] | null>(null);
  const [activeTab, setActiveTab] = useState("Página inicial");

  useEffect(() => {
    getStudentCommunities().then(res => setComunitities(res.data));
  }, [])

  return (
    <aside className={styles.left_aside}>
      <div className={styles.la_01}>
        {links.map((link, index) => (
          <Link key={index} to={link.path} onClick={() => setActiveTab(`${link.name}`)}>
            <div className={`${styles.card_link} ${activeTab === link.name ? styles.active : ""}`}>
              <i className={link.icon}></i>
              <p>{link.name}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.la_02}>
        {comunitities ? comunitities.map((comunititie, index) => (
          <Link className={styles.card_link} key={index} to={`/comunidades/${comunititie.id}`}>
            <i className="fa-solid fa-users"></i>
            <p>{comunititie.titulo}</p>
          </Link>
        )): null} 
        {comunitities && comunitities?.length >= 4 ? 
          <Link className={styles.card_link} to='/comunidades'>
            <i className="fa-solid fa-users"></i>
            <p>Ver todas...</p>
          </Link> : null
        }
      </div>
    </aside>
  )
}

export default LeftAside