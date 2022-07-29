import React, { useState, useEffect } from "react";

const LoyoutComponents = () => {
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

  return (
    <div>
      <h1>you are browsing on {onSmallScreen ? 'small' : 'large'} device</h1>
    </div>
  );
};

export default LoyoutComponents;
