import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cuando cambia la ruta, hace scroll hacia arriba
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTopOnRouteChange;