export const fadeIn = (direction = "up", delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (stagger = 0.15) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
      },
    },
  };
};

export const scaleIn = (delay = 0) => {
  return {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay,
      },
    },
  };
};

export const slideIn = (direction = "left", delay = 0) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };
};

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
};

export const hoverLift = {
  whileHover: {
    y: -3,
    scale: 1.03,
  },
  transition: {
    type: "spring",
    stiffness: 200,
  },
};
