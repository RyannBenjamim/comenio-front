export const preloadImages = (urls: string[]) => {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve();
          img.onerror = () => resolve(); 
        })
    )
  );
}
