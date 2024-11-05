import { motion } from "framer-motion";

const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1.0, ease: [0.6, 0.05, -0.01, 0.95] }}
      />

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1.0, ease: [0.3, 0.05, -0.01, 0.95]}}
      />
    </>
  );
};

export default transition;
