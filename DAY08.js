// 행렬의 덧셈

function solution(arr1, arr2) {
  const answer = [[]];
  console.log(answer === undefined);
  for (let i = 0; i < arr1.length; i++) {
    for (let l = 0; l < arr1[i].length; l++) {
      const sum = arr1[i][l] + arr2[i][l];
      console.log(sum);
      if (answer[i] === undefined) {
        answer[i] = [];
      }
      answer[i][l] = sum;
    }
  }
  console.log(answer);
}

arr1 = [
  [1, 2],
  [2, 3],
];
arr2 = [
  [3, 4],
  [5, 6],
];
solution(arr1, arr2);
