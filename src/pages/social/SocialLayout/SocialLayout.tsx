import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import logoV2 from '../../../assets/logov2.svg'
import profileImage from "../../../assets/minha-foto.jpg";

const SocialLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);

  function scrollToTop() {
    const main = mainRef.current!;
    let animationFrame: number | null = null;

    function animate() {
      const current = main.scrollTop;
      const newPos = current - current * 0.30;

      main.scrollTop = newPos;

      if (current > 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        main.scrollTop = 0;
        if (animationFrame) cancelAnimationFrame(animationFrame);
      }
    }

    animate();
  }

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    let isScrolling = false;
    let scrollDelta = 0;
    let animationFrame: number | null = null;

    function smoothScroll() {
      if (!main) return;

      main.scrollTop += scrollDelta * 0.15;
      scrollDelta *= 0.85;

      if (Math.abs(scrollDelta) < 0.2) {
        isScrolling = false;
        animationFrame = null;
        return;
      }

      animationFrame = requestAnimationFrame(smoothScroll);
    }

    function handleWheel(e: WheelEvent) {
      if (!main) return;

      e.preventDefault();

      scrollDelta = e.deltaY;

      if (e.deltaY < 0) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
      }
    }

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className={styles.global_container}>
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
              <div className={styles.theme_btn} onClick={toggleTheme}>
                {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
              </div>
              <div
                className={styles.profile_picture}
                style={{ backgroundImage: `url(${profileImage})` }}
              ></div>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.main_container}>
        <aside className={styles.left_aside}>
          <div className={styles.la_01}>
            <div className={styles.card_link}>
              <i className="fa-solid fa-house"></i>
              <p>Página inicial</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-rss"></i>
              <p>Feed</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-ranking-star"></i>
              <p>Atividades</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-circle-user"></i>
              <p>Perfil</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-ranking-star"></i>
              <p>Ranking</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-plus"></i>
              <p>Postar</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-gear"></i>
              <p>Configurações</p>
            </div>
          </div>

          <div className={styles.la_02}>
            <div className={styles.card_link}>
              <i className="fa-solid fa-users"></i>
              <p>Matemática</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-users"></i>
              <p>Português</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-users"></i>
              <p>Física</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-users"></i>
              <p>História</p>
            </div>
            <div className={styles.card_link}>
              <i className="fa-solid fa-users"></i>
              <p>Ver todas...</p>
            </div>
          </div>
        </aside>

        <main ref={mainRef} className={styles.main_content}>
          <Outlet />

          {showBackToTop && (
            <div className={styles.back_to_top} onClick={scrollToTop}>
              <i className="fa-solid fa-arrow-up"></i>
              <p>Voltar ao topo</p>
            </div>
          )}
        </main>

        <aside className={styles.right_aside}>
          <div className={styles.welcome_box}>
            <div className={styles.wb_header}></div>
            <div
              className={styles.wb_picture}
              style={{ backgroundImage: `url(${profileImage})` }}
            ></div>
            <div className={styles.wb_text}>
              <p className={styles.text01}>Bem vindo de volta</p>
              <p className={styles.text02}>Ryan</p>
              <div className={styles.cargo}>Aluno</div>
            </div>
          </div>
          <div className={styles.ranking_box}>Ranking de alunos</div>
        </aside>
      </div>
    </div>
  );
};

export default SocialLayout;
