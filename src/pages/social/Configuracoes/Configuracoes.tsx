import styles from './styles.module.css'

const Configuracoes = () => {
  return (
    <main className={styles.main_config}>
      <p className={styles.title}>Configurações de usuário</p>

      <form className={styles.infosPerfil_form}>
        <div className={styles.profile_picture_Box}>
          <div
            className={styles.profile_picture}
            style={{ backgroundImage: `url(${'/images/minha-foto.jpg'})` }}
          ></div>
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
            />
          </div>
        </div>

        <div className={styles.input}>
          <p>Nickname</p>
          <input type="text" placeholder='Seu nickname' />
        </div>

        <div className={styles.input}>
          <p>Bio</p>
          <textarea placeholder='Sua bio'></textarea>
        </div>

        <button className={styles.infosPerfil_form_btn}>Salvar</button>
      </form>

      <div className={styles.diviser}></div>

      <form className={styles.password_form}>
        <div className={styles.password_box}>
          <div className={styles.input}>
            <p className={styles.input_title}>Senha</p>
            <input type="password" placeholder='Digite sua senha atual' required />
          </div>

          <div className={styles.input}>
            <p className={styles.input_title}>Nova senha</p>
            <input type="password" placeholder='Digite sua nova senha' required/>
          </div>
        </div>

        <button className={styles.password_form_btn}>Trocar senha</button>
      </form>
    </main>
  )
}

export default Configuracoes