export const pickRandomIndex = (length, exclude = -1) => {
  if (length <= 1) return 0;
  let i;
  do {
    i = Math.floor(Math.random() * length);
  } while (i === exclude);
  return i;
};

export const groupBy = (arr, key) =>
  arr.reduce((acc, item) => {
    (acc[item[key]] ||= []).push(item);
    return acc;
  }, {});
