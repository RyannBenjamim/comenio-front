import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'
import type { Atividade } from '../../../types/atividades'
import ActivityDetailsCard from '../../../components/ActivityDetailsCard/ActivityDetailsCard'

const DetalhesPendentes = () => {
  const { comunidade_id, atividade_id } = useParams<{
    comunidade_id: string
    atividade_id: string
  }>()

  const navigate = useNavigate()

  const [atividade, setAtividade] = useState<Atividade | null>(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  const atividadeNome = 'Lista de Exercícios 01';
  const comunidadeNome = 'Matemática - 1º Ano A';
  const professorNome = 'Prof. João Silva';

  useEffect(() => {
    if (!atividade_id) return

    const loadData = async () => {
      try {
        setLoading(true)

        setAtividade({
          id: atividade_id,
          titulo: 'Atividade de Matemática',
          conteudo: `Resolva os exercícios da página 42.

Leia com atenção cada questão.
Mostre todos os cálculos realizados.
Boa atividade`,
          pdfCaminho: '/uploads/atividade.pdf',
          dataInicio: '2025-01-10',
          dataFim: '2025-01-20',
          comunidadeId: comunidade_id!,
          createdAt: '',
          updatedAt: '',
        })
      } catch {
        setErro('Erro ao carregar atividade')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [atividade_id, comunidade_id])

  if (loading) return <p className={styles.feedback}>Carregando atividade...</p>
  if (erro || !atividade) return <p className={styles.feedback}>{erro ?? 'Atividade não encontrada'}</p>

  return (
    <main className={styles.container}>
      <ActivityDetailsCard
        atividade={{
          atividadeNome,
          comunidadeNome,
          professorNome,
          dataInicio: atividade.dataInicio,
          dataFim: atividade.dataFim,
          conteudo: atividade.conteudo
        }}
      />

      <section className={styles.card}>
        <header className={styles.cardHeader}>
          <h2>Enviar resolução</h2>
        </header>

        <hr className={styles.divider} />

        <form className={styles.form}>
          <div className={styles.fieldForm}>
            <label>Arquivo da resolução</label>

            <div className={styles.fileInput}>
              <input type="file" />
              <span>Escolher arquivo</span>
            </div>

            <small>Aceitos: PDF e Zip</small>
          </div>

          <div className={styles.fieldForm}>
            <label>Comentário (opcional)</label>
            <textarea rows={4} placeholder="Escreva algo para o professor..." />
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancel}
              onClick={() => navigate(-1)}
            >
              Cancelar
            </button>

            <button type="submit" className={styles.submit}>
              Enviar resolução
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default DetalhesPendentes
