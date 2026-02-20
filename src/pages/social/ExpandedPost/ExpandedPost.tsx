import { useEffect, useState } from 'react'
import CardPost from '../../../components/CardPost/CardPost'
import styles from './styles.module.css'
import { Link, useParams } from 'react-router-dom'
import { findOne } from '../../../api/posts/posts.service'
import { findAll } from '../../../api/posts/respostas.service'
import type { Post } from '../../../types/posts'
import type { Resposta } from '../../../types/respostas'
import CreateContent from '../../../components/CreateContent/CreateContent'

const ExpandedPost = () => {
  const { username } = useParams<{ username: string }>();
  const { post_id } = useParams<{ post_id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [respostas, setRespostas] = useState<Resposta[]>([]);

  useEffect(() => {
    if (!post_id) return;

    const id = post_id;

    async function loadPost() {
      try {
        const response = await findOne(id);
        setPost(response.data);
      } catch (error) {
        console.error('Erro ao buscar o post', error);
      }
    }

    async function loadRespostas() {
      try {
        const response = await findAll(id);
        setRespostas(response.data);
      } catch (error) {
        console.error('Erro ao buscar as respostas do post', error);
      }
    }

    loadPost();
    loadRespostas();
  }, [post_id])

  if (!post) {
    return <div className={styles.container}>Carregando...</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.return_box}>
        <i className="fa-solid fa-arrow-left"></i>
        <p>
          Comentários do post de{' '}
          <Link className={styles.author_name} to="">
            @{username}
          </Link>
        </p>
      </div>

      <CardPost
        key={post.id}
        id={post.id}
        conteudo={post.conteudo}
        img={post.fotoUrl ?? undefined}
        createdAt={post.createdAt}
        user={post.user}
        comunidade={post.comunidade}
        type={1}
        link={`/posts/${post.id}`}
      />

      <CreateContent 
        author={username} 
        postId={post_id}
        type='resposta' 
      />

      <div className={styles.comments}>
        {respostas.map(resposta => (
          <CardPost
            key={resposta.id}
            id={resposta.id}
            conteudo={resposta.conteudo}
            img={resposta.fotoUrl ?? undefined}
            createdAt={resposta.createdAt}
            user={resposta.autor}
            comunidade={resposta.contexto.comunidade}
            type={0}
            author={post.user.nickname}
            link={`/comment/${resposta.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ExpandedPost