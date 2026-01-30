import { useEffect, useState } from "react";

export function useImageLoader(imgUrl?: string) {
  const [img, setImg] = useState<string | null>(null);
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    if (!imgUrl) {
      setImg(null);
      setLoadingImg(false);
      return;
    }

    let isMounted = true;
    setLoadingImg(true);

    const image = new Image();
    image.src = imgUrl;

    image.onload = () => {
      if (!isMounted) return;
      setImg(imgUrl);
      setLoadingImg(false);
    };

    image.onerror = () => {
      if (!isMounted) return;
      setImg(null);
      setLoadingImg(false);
    };

    return () => {
      isMounted = false;
    };
  }, [imgUrl]);

  return { img, loadingImg };
}

