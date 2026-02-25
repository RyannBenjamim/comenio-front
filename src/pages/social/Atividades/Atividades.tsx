import { useEffect, useState } from 'react'
import CommunityCard from '../../../components/CommunityCard/CommunityCard'
import InfoBox from '../../../components/InfoBox/InfoBox'
import styles from './styles.module.css'
import type { Comunidade } from '../../../types/comunidades'
import { findAll } from '../../../api/comunidades.service'
import { useAuth } from '../../../hooks/useAuth'
import { findOne } from '../../../api/usuarios/usuarios.service'
import Loading from '../../../components/Loading/Loading'

const Atividades = () => {
  const { user: authUser } = useAuth();
  const [comunidades, setComunidades] = useState<Comunidade[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (!authUser) return;

    const loadComunidades = async () => {
      try {
        const user = await findOne(authUser?.id);
        const turmaId = user.data.aluno?.turmaId;
        const response = await findAll(turmaId)
        setComunidades(response.data);
      } catch (error) {
        console.error('Erro ao buscar comunidades', error);
      } finally {
        setLoading(false);
      }
    }

    loadComunidades();
  }, [])

  return (
    <main className={styles.container}>
      <InfoBox
        icon="fa-solid fa-book"
        title="Hora das atividades ⚡"
        subtitle="Cada comunidade tem tarefas diferentes. Escolha por onde começar."
      />

      <div className={styles.comunitities}>
        {loading ? <Loading /> : 
          comunidades.map(comunidade => (
            <CommunityCard 
              key={comunidade.id}
              id={comunidade.id}
              communityName={comunidade.titulo}
              professorName={comunidade.professor}
              pendingActivities={6}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Atividades