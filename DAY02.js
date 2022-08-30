// 로또의 최고 순위와 최저 순위
// 나중에 리팩토링 꼭 해보기
function solution(lottos, win_nums) {
  let answer = [];
  let result = [];
  let result1 = [];
  for (let i = 0; i < lottos.length; i++) {
    if (win_nums.includes(lottos[i])) {
      result.push(lottos[i]);
    }
    if (lottos[i] === 0) {
      result1.push(lottos[i]);
    }
  }
  if (result1.length + result.length === 0) {
    answer.push(6);
  } else if (result1.length + result.length === 1) {
    answer.push(6);
  } else if (result1.length + result.length === 2) {
    answer.push(5);
  } else if (result1.length + result.length === 3) {
    answer.push(4);
  } else if (result1.length + result.length === 4) {
    answer.push(3);
  } else if (result1.length + result.length === 5) {
    answer.push(2);
  } else if (result1.length + result.length === 6) {
    answer.push(1);
  }
  if (result.length === 0) {
    answer.push(6);
  } else if (result.length === 1) {
    answer.push(6);
  } else if (result.length === 2) {
    answer.push(5);
  } else if (result.length === 3) {
    answer.push(4);
  } else if (result.length === 4) {
    answer.push(3);
  } else if (result.length === 5) {
    answer.push(2);
  } else if (result.length === 6) {
    answer.push(1);
  }
  return answer;
}
let lottos = [44, 1, 0, 0, 31, 25];
let win_nums = [31, 10, 45, 1, 6, 19];
solution(lottos, win_nums);
