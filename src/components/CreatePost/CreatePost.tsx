import { useEffect, useState } from 'react';
import InputSelect from '../InputSelect/InputSelect';
import styles from './styles.module.css'
import { findOne } from '../../api/usuarios/usuarios.service';
import type { Usuario } from '../../types/usuarios';
import { useAuth } from '../../hooks/useAuth';
import { useUserAvatar } from '../../hooks/useUserAvatar';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
import { getStudentCommunities } from '../../api/comunidades.service';

interface CreatePostProps {
  author?: string
  type: number // 0 -> Post | 1 -> Comment | 2 -> answer
}

interface Option {
  value: string | number
  label: string
}

const CreatePost = ({ author, type }: CreatePostProps) => {
  const { user: authUser } = useAuth();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null); 
  const [inputOptions, setInputOptions] = useState<Option[] | null>(null);

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
  }, [])

  const { profileImg, loadingImg } = useUserAvatar(usuario?.fotoPerfilUrl);

  const handleAutoSize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const closePreviewImage = () => setSelectedImage(null);

  const buttonText = type === 0 ? 'Postar' : 'Responder';
  const placeholderText = type === 0 ? 'Comece uma publicação' : 'Postar sua resposta';

  return (
    <div className={styles.create_post_box}>
      {author &&
        <p className={styles.author_text}>
          Respondendo a <Link className={styles.author_name} to='/perfil'>@{author}</Link>
        </p>
      }

      <div className={styles.line01}>
        <div className={styles.profile_picture}>
          {loadingImg ? (
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
          {type === 0 &&
            <div className={styles.input_comunititie}>
              <InputSelect 
                color="var(--color-background)"
                text="Adicionar comunidade"
                value={0}
                onChange={() => {}}
                options={inputOptions}
              />
            </div>
          }
          <button className={styles.post_btn}>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default CreatePost