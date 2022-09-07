// 자리 수 더하기
// 입출력 예
// N	answer
// 123	6 (o)
// 987	24 (o)

function solution(n) {
  n = String(n); // 숫자에는 길이가 없으므로 String으로 변환해준다.
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Number(n[i]); // String으로 변환 후 더하는 값이라 String타입의 덧셈이 되므로, 다시 Number Type으로 변환해준다.
  }
  console.log(sum);
}

solution(987);
