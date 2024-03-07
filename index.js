export function arrayLength(p) {
  let r = 0;
  for (const i of p) {
    r++;
  }

  return r;
}

export function arrPush([arr1], [arr2]) {
  const newArr = [];
  for (let i = 0; i < arrayLength(arr1); i++) {
    arr1[i] = newArr[i];
  }

  for (let j = 0; j < arrayLength(arr2); j++) {
    newArr[arrayLength(newArr)] = arr2[j];
  }

  return newArr;
}
