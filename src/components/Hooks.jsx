import { useEffect, useState } from 'react';

export const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 860)
    }

    window.addEventListener('resize', updateIsDesktop);
    updateIsDesktop();

    return () => {
      window.removeEventListener('resize', updateIsDesktop);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
