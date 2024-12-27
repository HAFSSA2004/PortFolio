import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={styles.loaderContainer}>
      <motion.div
        style={styles.dashedCircle}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <div style={styles.textContainer}>
        <span style={styles.percentage}>{progress}%</span>
      </div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#121212", // Dark background
    position: "relative",
  },
  dashedCircle: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    border: "4px dashed #38bdf8", // Dashed cyan border
    position: "absolute",
    boxShadow: "0 0 15px rgba(56, 189, 248, 0.5)", // Glow effect
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  percentage: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#38bdf8", // Matches the dashed circle
  },
};

export default Loader;
