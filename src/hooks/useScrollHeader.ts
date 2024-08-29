import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const useScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if we're at the top of the page AND on the homepage
      setIsAtTop(currentScrollPos < 100 && pathname === "/");

      // Determine scroll direction and visibility
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Initial check when the component mounts or pathname changes
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, pathname]);

  return { isVisible, isAtTop };
};

export default useScrollHeader;
