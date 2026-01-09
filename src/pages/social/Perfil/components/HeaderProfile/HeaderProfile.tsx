import styles from './styles.module.css'
import Loader from "../../../../../components/Loader/Loader"
import { findOne } from '../../../../../api/usuarios/usuarios.service';
import { useEffect, useState } from 'react';
import type { Usuario } from '../../../../../types/usuarios';
import { useAuth } from '../../../../../hooks/useAuth';
import { useUserAvatar } from '../../../../../hooks/useUserAvatar';

const HeaderProfile = () => {
  const { user: authUser } = useAuth();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  
  useEffect(() => {
    if (!authUser) return;
    findOne(authUser.id)
      .then(res => setUsuario(res.data))
      .finally(() => setLoadingUser(false));
  }, [authUser]);

  const { profileImg, loadingImg } = useUserAvatar(usuario?.fotoPerfilUrl);

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
          {loadingImg ? (
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

        <button className={styles.edit_profile_btn}>Editar perfil</button>
      </div>

      <p className={styles.nickname}>{usuario?.primeiroNome} {usuario?.sobrenome}</p>
      <p className={styles.username}>@{usuario?.nickname}</p>

      <p className={styles.bio_text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <div className={styles.class_text}>
        <i className="fa-solid fa-users"></i>
        <p>1º ano A</p>
      </div>
    </header>
  )
}

export default HeaderProfile