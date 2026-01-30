export const scrollToTop = (
  mainRef: React.RefObject<HTMLElement | null>
): void => {
  const main = mainRef.current;
  if (!main) return;

  let animationFrame: number | null = null;

  const animate = () => {
    const current = main.scrollTop;
    const newPos = current - current * 0.3;

    main.scrollTop = newPos;

    if (current > 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      main.scrollTop = 0;
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    }
  };

  animate();
};
