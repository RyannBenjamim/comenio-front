import { useEffect, useState } from 'react'
import styles from './styles/midias-perfil.module.css'
import { findUserPostsForGrid } from '../../../api/posts/posts.service'
import type { Post } from '../../../types/posts'
import Loading from '../../../components/Loading/Loading'

const MidiasPerfil = () => {
  const [posts, setPosts] = useState<Pick<Post, 'id' | 'fotoUrl'>[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    
    async function loadPosts() {
      try {
        const response = await findUserPostsForGrid()
        setPosts(response.data)
      } catch (error) {
        console.error('Erro ao buscar posts do perfil', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <main className={styles.midias_main}>
      {posts
        .filter(post => post.fotoUrl)
        .map(post => (
          <div key={post.id} className={styles.post}>
            <img
              src={post.fotoUrl as string}
              alt="Post do perfil"
              loading="lazy"
            />
          </div>
        ))}
    </main>
  )
}

export default MidiasPerfil
