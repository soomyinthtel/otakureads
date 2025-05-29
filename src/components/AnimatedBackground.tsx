"use client";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: theme === "dark" ? "white" : "black",
        zIndex: -1,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default AnimatedBackground;
