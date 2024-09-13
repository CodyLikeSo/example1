import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Transition = (OgComponent) => {
  return () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              className="slide-in"
              initial={{ scaleY: 0, filter: "blur(10px)" }}
              animate={{ scaleY: 1, filter: "blur(0px)" }}
              exit={{ scaleY: 0, filter: "blur(10px)", opacity: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          )}
        </AnimatePresence>
        <OgComponent />
        <style jsx>{`
          .slide-in {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background: #0f0f0f;
            transform-origin: bottom;
            z-index: 10;
          }
        `}</style>
      </>
    );
  };
};

export default Transition;
