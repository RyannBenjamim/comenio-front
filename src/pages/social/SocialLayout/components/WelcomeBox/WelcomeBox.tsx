import styles from './styles.module.css';
import { useAuth } from '../../../../../hooks/useAuth';
import { findOne } from '../../../../../api/usuarios/usuarios.service';
import { useEffect, useState } from 'react';
import type { Usuario } from '../../../../../types/usuarios';
import Loader from '../../../../../components/Loader/Loader';
import { useImageLoader } from '../../../../../hooks/useImageLoader';

const WelcomeBox = () => {
  const { user: authUser } = useAuth();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    if (!authUser) return;
    findOne(authUser.id)
      .then(res => setUsuario(res.data))
      .finally(() => setLoadingUser(false));
  }, [authUser]);

  const { 
    img: profileImg, 
    loadingImg: loadingProfileImg 
  } = useImageLoader(usuario?.fotoPerfilUrl);

  if (loadingUser) {
    return (
      <div className={styles.welcome_loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.welcome_box}>
      <div className={styles.wb_header}></div>

      <div className={styles.wb_picture}>
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

      <div className={styles.wb_text}>
        <p className={styles.text01}>Bem-vindo de volta</p>
        <p className={styles.text02}>{usuario?.primeiroNome}</p>
        <div className={styles.cargo}>{usuario?.cargo}</div>
      </div>
    </div>
  );
};

export default WelcomeBox;
