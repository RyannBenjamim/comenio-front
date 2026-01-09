import styles from './styles/styles.module.css'
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from './components/HeaderProfile/HeaderProfile';
import { useState } from 'react';

const Perfil = () => {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <>
      <Header />

      <main className={styles.perfil_main}>
        <div className={styles.perfil_tabs}>
          <Link
            to='/perfil'
            className={`${styles.tab_btn} ${activeTab === "posts" ? styles.active : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </Link>

          <Link
            to='comunidades'
            className={`${styles.tab_btn} ${activeTab === "comunidades" ? styles.active : ""}`}
            onClick={() => setActiveTab("comunidades")}
          >
            Comunidades
          </Link>

          <Link
            to='respostas'
            className={`${styles.tab_btn} ${activeTab === "respostas" ? styles.active : ""}`}
            onClick={() => setActiveTab("respostas")}
          >
            Respostas
          </Link>

          <Link
            to='curtidas'
            className={`${styles.tab_btn} ${activeTab === "curtidas" ? styles.active : ""}`}
            onClick={() => setActiveTab("curtidas")}
          >
            Curtidas
          </Link>
        </div>

        <Outlet />
      </main>
    </>
  );
};

export default Perfil;