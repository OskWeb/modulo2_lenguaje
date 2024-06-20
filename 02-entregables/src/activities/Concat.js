export const concat = (a, b) => {
  return [...a, ...b];
};

export const concat_2 = (...args) => {
  return args.reduce((a, b) => [...a, ...b]);
};
