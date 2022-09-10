//  정수 내림차순으로 배치하기
//  반복문을 위해 정수를 String으로 변경 후 반복문을 돌린 후 배열에 넣어서 sort메서드로 내림차순으로 정리까지 하였는데
// 문자열배열 --> 숫자열배열 --> 숫자로 변환하는 과정이 너무 비효율적으로 푼거 같음.
// 나중에 다시 풀어보기!

function solution(n) {
  let str = String(n);
  let answer = [];
  let result = "";
  for (let i = 0; i < str.length; i++) {
    answer.push(str[i]);
    answer.sort((b, a) => a - b);
    result = answer.map(Number);
    result = +answer.join("");
  }
  return result;
}
