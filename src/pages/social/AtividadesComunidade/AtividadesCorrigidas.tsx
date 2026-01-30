import ActivityCard from '../../../components/ActivityCard/ActivityCard'
import styles from './styles/atividades-corrigidas.module.css'

const AtividadesCorrigidas = () => {
  return (
    <main className={styles.container}>
      <ActivityCard
        type="correcao"
        titulo="Lista de Exercícios 01"
        alunoNome="Maria Oliveira"
        link='/atividades/123/corrigidas/456'
      />

      <ActivityCard
        type="correcao"
        titulo="Lista de Exercícios 04"
        alunoNome="Rafael Martins"
        link='/atividades/123/corrigidas/456'
      />

      <ActivityCard
        type="correcao"
        titulo="Trabalho Individual"
        alunoNome="Juliana Rocha"
        link='/atividades/123/corrigidas/456'
      />

      <ActivityCard
        type="correcao"
        titulo="Atividade Avaliativa 04"
        alunoNome="Pedro Almeida"
        link='/atividades/123/corrigidas/456'
      />
    </main>
  )
}

export default AtividadesCorrigidas