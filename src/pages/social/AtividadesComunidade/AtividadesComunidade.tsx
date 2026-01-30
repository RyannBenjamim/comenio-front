import { Link, Outlet, useParams } from 'react-router-dom'
import InfoBox from '../../../components/InfoBox/InfoBox'
import styles from './styles/styles.module.css'
import { useEffect, useState } from 'react'
import { findOne } from '../../../api/comunidades.service'
import type { Comunidade } from '../../../types/comunidades'

const AtividadesComunidade = () => {
  const { comunidade_id } = useParams<{ comunidade_id: string }>();
  const [comunidade, setComunidade] = useState<Comunidade | null>(null);
  const [activeTab, setActiveTab] = useState("pendentes")

  useEffect(() => {
    if (!comunidade_id) return;

    const loadData = async () => {
      try {
        const response = await findOne(comunidade_id);
        setComunidade(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da comunidade', error);
      }
    }

    loadData()
  }, [comunidade_id])

  return (
    <main className={styles.container}>
      <InfoBox
        icon="fa-solid fa-book"
        title={comunidade ? comunidade.titulo : 'Indefinido'}
        subtitle="Veja o que já foi feito e o que ainda falta."
      />

      <div className={styles.content}>
        <div className={styles.atividades_tabs}>
          <Link
            to={`/atividades/${comunidade?.id}`}
            className={`${styles.tab_btn} ${activeTab === "pendentes" ? styles.active : ""}`}
            onClick={() => setActiveTab("pendentes")}
          >
            Pendentes
          </Link>

          <Link
            to='entregues'
            className={`${styles.tab_btn} ${activeTab === "entregues" ? styles.active : ""}`}
            onClick={() => setActiveTab("entregues")}
          >
            Entregues
          </Link>

          <Link
            to='corrigidas'
            className={`${styles.tab_btn} ${activeTab === "corrigidas" ? styles.active : ""}`}
            onClick={() => setActiveTab("corrigidas")}
          >
            Corrigidas
          </Link>
        </div>

        <Outlet />
      </div>
    </main>
  )
}

export default AtividadesComunidade