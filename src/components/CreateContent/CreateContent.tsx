import { useEffect, useState } from 'react';
import InputSelect from '../InputSelect/InputSelect';
import styles from './styles.module.css'
import { findOne } from '../../api/usuarios/usuarios.service';
import type { Usuario } from '../../types/usuarios';
import { useAuth } from '../../hooks/useAuth';
import { useImageLoader } from '../../hooks/useImageLoader';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { getStudentCommunities } from '../../api/comunidades.service';
import { create as createPost } from '../../api/posts/posts.service';
import { create as createResposta } from '../../api/posts/respostas.service';
import { useNavigate } from 'react-router-dom';
import type { Resposta } from '../../types/respostas';

type CreateContentType = 'post' | 'resposta';

interface CreatePostProps {
  type: CreateContentType
  author?: string
  postId?: string
  respostaId?: string
  onCreated?: (resposta: Resposta) => void
}

interface Option {
  value: string | number
  label: string
}

const CreateContent = ({ 
  type, 
  author, 
  postId, 
  respostaId,
  onCreated
}: CreatePostProps) => {
  const { user: authUser } = useAuth();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 
  const [inputOptions, setInputOptions] = useState<Option[] | null>(null);

  const [conteudo, setConteudo] = useState('');
  const [selectedCommunity, setSelectedCommunity] = useState<number | string>(0);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) return;
    findOne(authUser.id)
      .then(res => setUsuario(res.data))
  }, [authUser]);

  useEffect(() => {
    const options: Option[] = []
    options.push({ value: 0, label: 'Feed Geral' })

    getStudentCommunities().then(res => 
      res.data.map(res => {
        options.push({ value: res.id, label: res.titulo })
      })
    );
    setInputOptions(options)
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!authUser) return;
    if (!conteudo.trim()) return;

    setLoading(true);

    try {
      if (type === 'post') {
        await savePost();
      } else {
        await saveResposta();
      }
    } catch (error) {
      console.error('Erro ao criar post', error);
    } finally {
      setLoading(false);
    }
  };

  const savePost = async () => {
    const data = {
      conteudo,
      image: imageFile ?? undefined,
      feedId: selectedCommunity === 0 ? '0' : undefined,
      comunidadeId: selectedCommunity !== 0 ? String(selectedCommunity) : undefined,
    };

    await createPost(data);

    setConteudo('');
    setSelectedImage(null);
    setImageFile(null);
    navigate(`/comunidades/${selectedCommunity}`);
    setSelectedCommunity(0);
  }

  const saveResposta = async () => {
    const data = {
      conteudo,
      image: imageFile ?? undefined,
      postId: postId ?? undefined,
      respostaId: respostaId ?? undefined
    };

    const response = await createResposta(data);

    setConteudo('');
    setSelectedImage(null);
    setImageFile(null);
    onCreated?.(response.data);
    setSelectedCommunity(0);
  }

  const { 
    img: profileImg, 
    loadingImg: loadingProfileImg 
  } = useImageLoader(usuario?.fotoPerfilUrl);

  const handleAutoSize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const closePreviewImage = () => {
    setSelectedImage(null);
    setImageFile(null);
  };

  const buttonText = type === 'post' ? 'Postar' : 'Responder';
  const placeholderText = type === 'post' ? 'Comece uma publicação' : 'Postar sua resposta';

  return (
    <form className={styles.create_post_box} onSubmit={handleSubmit}>
      {author &&
        <p className={styles.author_text}>
          Respondendo a <Link className={styles.author_name} to='/perfil'>@{author}</Link>
        </p>
      }

      <div className={styles.line01}>
        <div className={styles.profile_picture}>
          {loadingProfileImg ? (
            <Loader />
          ) : (
            <div
              className={styles.img}
              style={{ backgroundImage: `url(${profileImg ?? '/images/avatar-default.png'})` }}
            ></div>
          )}
        </div>
        <textarea
          className={styles.input_text}
          placeholder={placeholderText}
          rows={1}
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
          onInput={handleAutoSize}
        />
      </div>

      {selectedImage && (
        <div className={styles.image_preview}>
          <div className={styles.close_preview_btn} onClick={closePreviewImage}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <img src={selectedImage} alt="Preview" />
        </div>
      )}

      <div className={styles.line02}>
        <div className={styles.input_image_box}>
          <label htmlFor='img_input' className={styles.uploud_icon}>
            <i className="fa-solid fa-image"></i>
          </label>

          <input 
            type="file" 
            id="img_input" 
            name='img_input' 
            accept='image/*' 
            className={styles.input_image} 
            onChange={handleImageChange} 
          />
        </div>

        <div className={styles.input_post}>
          {type === 'post' &&
            <div className={styles.input_comunititie}>
              <InputSelect 
                color="var(--color-background)"
                text="Adicionar comunidade"
                value={selectedCommunity}
                onChange={(value) => setSelectedCommunity(value)}
                options={inputOptions}
              />
            </div>
          }
          
          <button 
            className={styles.post_btn}
            disabled={loading}
          >
            {loading ? 'Publicando...' : buttonText}
          </button>

        </div>
      </div>
    </form>
  )
}

export default CreateContent