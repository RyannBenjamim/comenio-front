import styles from './styles/styles.module.css'
import { Outlet, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Header from './components/HeaderProfile/HeaderProfile';
import { redirect } from "react-router-dom";
import { useEffect, useState } from 'react';

const Perfil = () => {
  const { nickname } = useParams<{ nickname: string }>();
  const [activeTab, setActiveTab] = useState("midias")

  const isMyProfile = nickname ? false : true;

  useEffect(() => {
    redirect('/perfil')
  }, [])

  return (
    <>
      <Header />

      <main className={styles.perfil_main}>
         ------ resolver bug do f5 ------
        <div className={styles.perfil_tabs}>
          <Link
            to={isMyProfile ? '/perfil' : `/perfil/${nickname}`}
            className={`${styles.tab_btn} ${activeTab === "midias" ? styles.active : ""}`}
            onClick={() => setActiveTab("midias")}
          >
            Midias
          </Link>

          <Link
            to='posts'
            className={`${styles.tab_btn} ${activeTab === "posts" ? styles.active : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            Posts
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