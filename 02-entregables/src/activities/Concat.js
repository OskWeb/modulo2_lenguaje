export const concat = (a, b) => {
  return [...a, ...b];
};
//Opcional con multiples arrays de entrada ------------
export const concat_2 = (...args) => {
  return args.reduce((a, b) => [...a, ...b]);
};
