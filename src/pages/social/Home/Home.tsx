import { useEffect, useState } from 'react'
import CreateContent from '../../../components/CreateContent/CreateContent'
import CardPost from '../../../components/CardPost/CardPost'

import { findAllMergedPosts } from '../../../api/posts/posts.service'
import type { Post } from '../../../types/posts'

import styles from './styles.module.css'
import InfoBox from '../../../components/InfoBox/InfoBox'
import CardPostSkeleton from '../../../components/CardPostSkeleton/CardPostSkeleton'
import { preloadImages } from '../../../utils/preloadImages'

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);

    async function loadPosts() {
      try {
        const response = await findAllMergedPosts();
        const postsData = response.data;

        const imageUrls = postsData
          .map(post => post.fotoUrl)
          .filter(Boolean) as string[];

        await preloadImages(imageUrls);

        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar posts', error);
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <main className={styles.container}>
      <CreateContent type='post' />

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

export default Home
