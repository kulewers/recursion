function fibs(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.slice(0, n);
}

function fibsRec(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;

  return fibsRec(n - 1) + fibsRec(n - 2);
}

function mergeSort(arr) {
  let length = arr.length;

  if (length < 2) return arr;

  let leftHalf = mergeSort(arr.slice(0, length / 2));
  let rightHalf = mergeSort(arr.slice(length / 2));

  let mergedArr = new Array();
  while (leftHalf.length !== 0 && rightHalf.length !== 0) {
    if (leftHalf[0] < rightHalf[0]) {
      mergedArr.push(leftHalf.shift());
    } else {
      mergedArr.push(rightHalf.shift());
    }
  }
  if (leftHalf.length === 0 && rightHalf.length !== 0) {
    return mergedArr.concat(rightHalf);
  } else if (leftHalf.length !== 0 && rightHalf.length === 0) {
    return mergedArr.concat(leftHalf);
  }
}

let arr = [4, 8, 6, 2, 1, 7, 5, 3];
let sortedArr = mergeSort(arr);

console.log(sortedArr);
