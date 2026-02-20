import { useEffect, useState } from 'react'
//import CardPost from '../../../components/CardPost/CardPost'
import { findAllByUserId } from '../../../api/posts/respostas.service'
import styles from './styles/posts-perfil.module.css'
import InfoBox from '../../../components/InfoBox/InfoBox'
import CardPostSkeleton from '../../../components/CardPostSkeleton/CardPostSkeleton'
import { preloadImages } from '../../../utils/preloadImages'
import type { Resposta } from '../../../types/respostas'

const RespostasPerfil = () => {
  const [respostas, setRespostas] = useState<Resposta[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);

    async function loadRespostas() {
      try {
        const response = await findAllByUserId();
        const respostasData = response.data;

        const imageUrls = respostasData
          .map(resposta => resposta.fotoUrl)
          .filter(Boolean) as string[];

        await preloadImages(imageUrls);

        setRespostas(respostasData);
        console.log(respostasData)
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar respostas do usuário', error);
        setLoading(false);
      }
    }

    loadRespostas();
  }, []);

  /*const getPostPageLink = (post: any) => {
    if (!post) return '#';
    return `/${post.user?.nickname}/posts/${post.id}`;
  }

  const getRespostaPageLink = (resposta: any) => {
    if (!resposta) return '#';
    return `/${resposta.user?.nickname}/comments/${resposta.id}/`;
  }*/

  /*const getRespostaLink = (resposta: Resposta) => {
    if (resposta.contexto.postAutor) return getPostPageLink(resposta.contexto.postAutor);
    if (resposta.contexto.respostaPaiAutor) return getRespostaPageLink(resposta.contexto.respostaPaiAutor);
    return '#';
  };*/

  return (
    <main className={styles.posts_main}>
      {loading && 
        Array.from({ length: 5 }).map((_, index) => (
          <CardPostSkeleton key={index} />
        ))
      }

      {!loading && respostas.length === 0 && (
        <InfoBox 
          icon='fa-solid fa-question'
          title='Ainda está quieto por aqui 👀'
          subtitle='Que tal iniciar a primeira discussão e movimentar a turma?'
        />
      )}

      {!loading &&
        /*respostas.map(resposta => (
          <CardPost
            key={resposta.id}
            id={resposta.id}
            conteudo={resposta.conteudo}
            img={resposta.fotoUrl ?? undefined}
            createdAt={resposta.createdAt}
            user={resposta.autor}
            comunidade={resposta.contexto.comunidade}
            type={0}
            author={resposta.contexto.postAutor?.user?.nickname}
            link={`${getRespostaLink(resposta)}`}
          />
        ))*/ null
      }
    </main>
  )
}

export default RespostasPerfil