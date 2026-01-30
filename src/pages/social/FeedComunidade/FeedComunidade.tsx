import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import CreatePost from '../../../components/CreatePost/CreatePost'
import CardPost from '../../../components/CardPost/CardPost'

import { findAll } from '../../../api/posts/posts.service'
import type { Post } from '../../../types/posts'

import styles from './styles.module.css'
import InfoBox from '../../../components/InfoBox/InfoBox'
import CardPostSkeleton from '../../../components/CardPostSkeleton/CardPostSkeleton'
import { preloadImages } from '../../../utils/preloadImages'

const FeedComunidade = () => {
  const { comunidade_id } = useParams<{ comunidade_id: string }>()
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!comunidade_id) return;

    setLoading(true);

    async function loadPosts() {
      try {
        const response = await findAll(comunidade_id);
        const postsData = response.data;

        const imageUrls = postsData
          .map(post => post.fotoUrl)
          .filter(Boolean) as string[];

        await preloadImages(imageUrls);

        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar posts da comunidade', error);
        setLoading(false);
      }
    }

    loadPosts();
  }, [comunidade_id]);

  return (
    <main className={styles.container}>
      <CreatePost type={0} />

      <div className={styles.posts}>
        {loading && 
          Array.from({ length: 5 }).map((_, index) => (
            <CardPostSkeleton key={index} />
          ))
        }

        {!loading && posts.length === 0 && (
          <InfoBox 
            icon='fa-solid fa-question'
            title='Ainda está quieto por aqui 👀'
            subtitle='Que tal iniciar a primeira discussão e movimentar a turma?'
          />
        )}

        {!loading &&
          posts.map(post => (
            <CardPost
              key={post.id}
              id={post.id}
              conteudo={post.conteudo}
              img={post.fotoUrl ?? undefined}
              createdAt={post.createdAt}
              user={post.user}
              comunidade={post.comunidade}
              type={0}
              link={`/posts/${post.id}`}
            />
          ))
        }
      </div>
    </main>
  )
}

export default FeedComunidade
