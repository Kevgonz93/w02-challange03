export function arrayLength(p) {
  let r = 0;
  for (const i of p) {
    r++;
  }

  return r;
}

export function arrpush(arr1, arr2) {
  const newArr = [];
  for (let i = 0; i < arrayLength(arr1); i++) {
    arr1[i] = newArr[i];
  }

  for (let j = 0; j < arrayLength(arr2); j++) {
    newArr[arrayLength(newArr)] = arr2[j];
  }

  return newArr;
}

const awes = [1, 2, 3, 4];
const ome = [5, 6, 7, 8];

console.log(arrpush(awes, ome));
console.log(awes.length);
console.log(arrayLength(awes));
