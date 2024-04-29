
import React, { useState, useEffect } from "react";

function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      const progress = (scrollY / (fullHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full h-2 bg-gray-300">
      <div
        className="h-full bg-indigo-500"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}

export default ScrollIndicator;
