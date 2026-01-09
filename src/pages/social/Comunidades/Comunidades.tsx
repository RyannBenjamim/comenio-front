import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { getStudentCommunities } from '../../../api/comunidades.service';

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
      <div className={styles.comunidades_box}>
        {comunitities ? comunitities.map((comunititie, index) => (
          <div className={styles.card_link} key={index}>
            <i className="fa-solid fa-users"></i>
            <p>{comunititie.titulo}</p>
          </div>
        )): null} 
      </div>
    </main>
  )
}

export default Comunidades