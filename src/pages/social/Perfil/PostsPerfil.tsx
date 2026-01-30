import { useEffect, useState } from 'react'
import CardPost from '../../../components/CardPost/CardPost'

import { findUserPostsForFeed } from '../../../api/posts/posts.service'
import type { Post } from '../../../types/posts'

import styles from './styles/posts-perfil.module.css'
import InfoBox from '../../../components/InfoBox/InfoBox'
import CardPostSkeleton from '../../../components/CardPostSkeleton/CardPostSkeleton'
import { preloadImages } from '../../../utils/preloadImages'

const PostsPerfil = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);

    async function loadPosts() {
      try {
        const response = await findUserPostsForFeed();
        const postsData = response.data;

        const imageUrls = postsData
          .map(post => post.fotoUrl)
          .filter(Boolean) as string[];

        await preloadImages(imageUrls);

        setPosts(postsData);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar posts do perfil', error);
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <main className={styles.posts_main}>
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
    </main>
  )
}

export default PostsPerfil
