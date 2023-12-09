import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      I have some content here
    </motion.div>
  );
};

export default Animate;
