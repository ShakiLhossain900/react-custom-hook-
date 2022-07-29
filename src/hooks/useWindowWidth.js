import {useState, useEffect} from 'react';

const useWindowWidth = () => {
    const [onSmallScreen, setOnSmallScreen] = useState(false);
    const checkScreenSize = () => {
      //window.innerWith jodi 768 er niche chole jay tiale inner with true hoye jabe
      setOnSmallScreen(window.innerWidth < 768);
    };
  
    useEffect(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener ('resize', checkScreenSize);
    }, []);
    return  onSmallScreen;
};

export default useWindowWidth;