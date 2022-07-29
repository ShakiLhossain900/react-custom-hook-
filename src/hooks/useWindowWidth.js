import { useState, useEffect } from "react";

const useWindowWidth = (screenSize) => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      //window.innerWith jodi 768 er niche chole jay tiale inner with true hoye jabe
      setOnSmallScreen(window.innerWidth < screenSize);
    };
    checkScreenSize();
    
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screenSize]);
  return onSmallScreen;
};

export default useWindowWidth;
