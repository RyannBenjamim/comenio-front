import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { getStudentCommunities } from '../../../api/comunidades.service';
import InfoBox from '../../../components/InfoBox/InfoBox';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading/Loading';

interface Comunitites {
  id: string
  titulo: string
}

const Comunidades = () => {
  const [comunitities, setComunitities] = useState<Comunitites[] | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    try {
      setLoading(true);
      getStudentCommunities().then(res => setComunitities(res.data));
    } catch(error) {
      console.error('Erro ao buscar comunidades', error);
    } finally {
      setLoading(false);
    }
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
        {loading ? <Loading /> :
          comunitities?.map(comunititie => (
            <Link to={`/comunidades/${comunititie.id}`}>
              <div className={styles.card_link} key={comunititie.id}>
                <i className="fa-solid fa-users"></i>
                <p>{comunititie.titulo}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </main>
  )
}

export default Comunidades