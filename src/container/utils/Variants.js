export const fadeInLeftVar = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export const fadeInRightVar = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const fadeInBottomVar = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const fadeInTopVar = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
