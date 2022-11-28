const sumItems = (array) => {
  let sum = 0;
  const dig = (arr) => arr.forEach(e => {
    if (Array.isArray(e)) {
      dig(e);
    } else {
      sum += e;
    }
  });
  dig(array);
  return sum;
};

module.exports = sumItems;