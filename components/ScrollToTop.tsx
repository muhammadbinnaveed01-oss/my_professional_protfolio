import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to top when pathname changes (e.g., / -> /cv)
    // We do not scroll if it's the same page (hash navigation handled by Home.tsx)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;