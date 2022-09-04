// 평균구하기

function solution(arr) {
  const sum = arr.reduce((cu, el) => {
    console.log(cu, el);
    return cu + el;
  }, 0);
  return sum / arr.length;
}
