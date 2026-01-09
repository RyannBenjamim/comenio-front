import { useEffect, useState } from "react";

export function useUserAvatar(imgUrl?: string) {
  const [profileImg, setProfileImg] = useState<string | null>(null);
  const [loadingImg, setLoadingImg] = useState(!!imgUrl); 

  useEffect(() => {
    if (!imgUrl) {
      setProfileImg(null);
      setLoadingImg(false);
      return;
    }

    let isMounted = true;
    setLoadingImg(true);

    const img = new Image();
    img.src = imgUrl;

    img.onload = () => {
      if (!isMounted) return;
      setProfileImg(imgUrl);
      setLoadingImg(false);
    };

    img.onerror = () => {
      if (!isMounted) return;
      setLoadingImg(false);
    };

    return () => {
      isMounted = false;
    };
  }, [imgUrl]);

  return { profileImg, loadingImg };
}

