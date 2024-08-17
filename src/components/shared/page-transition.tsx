"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 800); // Increased duration for smoother animation
    return () => clearTimeout(timer);
  }, [pathname]);

  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 1,
    duration: 0.8,
    delay: 0.2,
  };

  return (
    <>
      {children}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key={pathname}
            initial={{ scale: 50, x: "100%", y: "100%" }}
            animate={{ scale: 0, x: "0%", y: "0%" }}
            // exit={{ scale: 0, x: "0%", y: "0%" }}
            transition={springTransition}
            style={{
              position: "fixed",
              right: 0,
              top: 0,
              width: "100px",
              height: "100px",

              zIndex: 999999,
              transformOrigin: "top bottom",
            }}
            className=" bg-[#E33F38] rounded-full"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
