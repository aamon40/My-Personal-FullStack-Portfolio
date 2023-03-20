export const fadeInLeftVar = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
      staggerChildren: 0.1,
      delay: 0.7,
    },
  },
};

export const fadeInRightVar = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInBottomVar = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInTopVar = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
