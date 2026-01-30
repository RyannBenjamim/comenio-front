import ActivityCard from '../../../components/ActivityCard/ActivityCard'
import styles from './styles/atividades-entregues.module.css'

const AtividadesEntregues = () => {
  return (
    <main className={styles.container}>
      <ActivityCard
        type="resolucao"
        titulo="Lista de Exercícios 01"
        alunoNome="Maria Oliveira"
        link='/atividades/123/entregues/456'
      />

      <ActivityCard
        type="resolucao"
        titulo="Lista de Exercícios 04"
        alunoNome="Rafael Martins"
        link='/atividades/123/entregues/456'
      />

      <ActivityCard
        type="resolucao"
        titulo="Trabalho Individual"
        alunoNome="Juliana Rocha"
        link='/atividades/123/entregues/456'
      />

      <ActivityCard
        type="resolucao"
        titulo="Atividade Avaliativa 04"
        alunoNome="Pedro Almeida"
        link='/atividades/123/entregues/456'
      />
    </main>
  )
}

export default AtividadesEntregues