import React, { useState, useEffect } from "react";

const LoyoutComponents2 = () => {
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
    <div className={onSmallScreen ? 'small' : 'large'}>
        <h1>this is another components</h1>
    </div>
  );
};

export default LoyoutComponents2;
