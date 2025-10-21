import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children, options = {} }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      delay: 0,
      easing: "ease-in-out",
      ...options,
    });

    AOS.refresh();

    return () => {
      AOS.refresh();
    };
  }, [options]);

  return <>{children}</>;
};

export default AOSProvider;
