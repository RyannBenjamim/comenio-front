import ActivityCard from '../../../components/ActivityCard/ActivityCard'
import styles from './styles/atividades-corrigidas.module.css'

const AtividadesPendentes = () => {
  return (
    <main className={styles.container}>
      <ActivityCard
        type="atividade"
        titulo="Lista de Exercícios 01"
        descricao="Resolver os exercícios sobre funções quadráticas."
        dataInicio="01/03/2026"
        dataFim="10/03/2026"
        link='/atividades/123/pendentes/456'
      />

      <ActivityCard
        type="atividade"
        titulo="Lista de Exercícios 04"
        descricao="Exercícios sobre matrizes e determinantes."
        dataInicio="02/05/2026"
        dataFim="12/05/2026"
        link='/atividades/123/pendentes/456'
      />

      <ActivityCard
        type="atividade"
        titulo="Trabalho Individual"
        descricao="Elaboração de um artigo curto sobre inteligência artificial."
        dataInicio="05/05/2026"
        dataFim="25/05/2026"
        link='/atividades/123/pendentes/456'
      />

      <ActivityCard
        type="atividade"
        titulo="Atividade Avaliativa 04"
        descricao="Questionário online sobre probabilidade."
        dataInicio="15/05/2026"
        dataFim="22/05/2026"
        link='/atividades/123/pendentes/456'
      />
    </main>
  )
}

export default AtividadesPendentes