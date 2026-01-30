import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { getStudentCommunities } from '../../../api/comunidades.service';
import InfoBox from '../../../components/InfoBox/InfoBox';
import { Link } from 'react-router-dom';

interface Comunitites {
  id: string
  titulo: string
}

const Comunidades = () => {
  const [comunitities, setComunitities] = useState<Comunitites[] | null>(null);
  
  useEffect(() => {
    getStudentCommunities().then(res => setComunitities(res.data));
  }, [])

  return (
    <main>
      <InfoBox 
        icon='fa-solid fa-users'
        title='Minhas comunidades'
        subtitle="Seus espaços para aprender, conversar e colaborar."
        totalComunitities={comunitities ? comunitities.length : 0}
      />

      <div className={styles.comunidades_box}>
        {comunitities?.map(comunititie => (
          <Link className={styles.card_link} key={comunititie.id} to={`/comunidades/${comunititie.id}`}>
            <i className="fa-solid fa-users"></i>
            <p>{comunititie.titulo}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Comunidades