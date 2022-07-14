// filter 함수
const filter = (callback) => {
  const array = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i);
    if (result) {
      array.push(this[i]);
    }
  }

  return array;
};

const arr = [1, 2, 3];

const callback = (e, i) => {
  return e > 1;
};

const newArr = arr.filter(callback); // [2, 3]
