import styles from './styles.module.css'
import Loader from "../../../../../components/Loader/Loader"
import { getMyProfile, getProfileByNickname } from '../../../../../api/usuarios/usuarios.service';
import { useEffect, useState } from 'react';
import type { MyProfile } from '../../../../../types/usuarios';
import { useAuth } from '../../../../../hooks/useAuth';
import { useImageLoader } from '../../../../../hooks/useImageLoader';
import { useParams } from 'react-router-dom';

const HeaderProfile = () => {
  const { nickname } = useParams<{ nickname: string }>();
  const { user: authUser } = useAuth();
  const [usuario, setUsuario] = useState<MyProfile | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  
  useEffect(() => {
    if (!authUser) return;

    const loadProfile = async () => {
      try {
        setLoadingUser(true);

        if (nickname) {
          const res = await getProfileByNickname(nickname);
          console.log(res.data)
          setUsuario(res.data);
        } else {
          const res = await getMyProfile();
          console.log(res.data)
          setUsuario(res.data);
        }
      } catch (error) {
        console.error('Erro ao buscar o perfil', error);
      } finally {
        setLoadingUser(false);
      }
    };

    loadProfile();
  }, [authUser, nickname]);

  const { 
      img: profileImg, 
      loadingImg: loadingProfileImg 
    } = useImageLoader(usuario?.fotoPerfilUrl);

  const isMyProfile = nickname ? false : true;

  if (loadingUser) {
    return (
      <header className={styles.perfil_header_loader}><Loader /></header>
    )
  }
  
  return (
    <header className={styles.perfil_header}>
      <div className={styles.header_bg}></div>

      <div className={styles.header_main}>
        <div className={styles.profile_picture}>
          {loadingProfileImg ? (
            <Loader />
          ) : (
            <div
              className={styles.img}
              style={{
                backgroundImage: `url(${profileImg ?? '/images/avatar-default.png'})`,
              }}
            ></div>
          )}
        </div>

        {isMyProfile 
          ? <button className={styles.edit_profile_btn}>Editar perfil</button> 
          : <button className={styles.fantasma_btn}>botão fantasma</button>
        }
      </div>

      <p className={styles.nickname}>{usuario?.primeiroNome} {usuario?.sobrenome}</p>
      <p className={styles.username}>@{usuario?.nickname}</p>

      <p className={styles.bio_text}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

      <div className={styles.class_text}>
        <i className="fa-solid fa-users"></i>
        <p>{usuario?.aluno?.turma?.titulo}</p>
      </div>
    </header>
  )
}

export default HeaderProfile