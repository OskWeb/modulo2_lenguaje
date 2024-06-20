export const head = (array) => {
  let [first] = array;
  return first;
};

export const tail = (array) => {
  const [first, ...otherElements] = array;
  return otherElements;
};

export const init = ([...array]) => {
  array.pop();
  return array;
};

export const last = ([...array]) => {
  return array.pop();
};
