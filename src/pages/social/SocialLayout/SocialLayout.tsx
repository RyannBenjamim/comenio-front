import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Ranking from "./components/Ranking/Ranking";
import WelcomeBox from "./components/WelcomeBox/WelcomeBox";
import LeftAside from "./components/LeftAside/LeftAside";

const SocialLayout = () => {
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
    setShowBackToTop(false);
  }

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    let velocity = 0;
    let animationFrame: number | null = null;

    const smoothScroll = () => {
      if (!main) return;

      main.scrollTop += velocity * 0.32; 
      velocity *= 0.93;                 

      if (Math.abs(velocity) < 0.25) {
        animationFrame = null;
        return;
      }

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    const handleWheel = (e: WheelEvent) => {
      if (!main) return;

      e.preventDefault();

      velocity = e.deltaY * 0.24;

      const isScrollingUp = e.deltaY < 0;
      const isAtTop = main.scrollTop <= 0;

      setShowBackToTop(isScrollingUp && !isAtTop);

      if (!animationFrame) {
        animationFrame = requestAnimationFrame(smoothScroll);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className={styles.global_container}>
      <Header />
     
      <div className={styles.main_container}>
        <LeftAside />

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
          <WelcomeBox />
          <Ranking />
        </aside>
      </div>
    </div>
  );
};

export default SocialLayout;