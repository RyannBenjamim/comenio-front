import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../../../../context/ThemeContext";
import { useAuth } from "../../../../../hooks/useAuth";
import styles from "./styles.module.css";

const logo = '/images/logo.svg'
const logoV2 = '/images/logoV2.svg'

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();

  const navigate = useNavigate();

  return (
    <header>
      <div className={styles.header_01}></div>
      <div className={styles.header_02}>
        <div className={styles.content}>
          <img src={theme === 'light' ? logo : logoV2} alt="logo" className={styles.logo} />
          <div className={styles.search_box}>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              name="search"
              placeholder="Pesquise por tópicos e discussões"
              className={styles.input_search}
            />
          </div>
          <div className={styles.header_icons}>
            <div className={styles.logout_btn} onClick={() => {
              logout();
              navigate("/login");
            }}>
              <i className="fa-solid fa-power-off"></i>
            </div>
            <div className={styles.theme_btn} onClick={toggleTheme}>
              {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header