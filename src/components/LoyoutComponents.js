import React, { useState } from "react";

const LoyoutComponents = () => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);
  const checkScreenSize = () => {

    //window.innerWith jodi 768 er niche chole jay tiale inner with true hoye jabe
    setOnSmallScreen(window.innerWidth< 768)
  };
  return (
    <div>
      <h1>you are browsing on small device</h1>
    </div>
  );
};

export default LoyoutComponents;
