// 나머지가 1이 되는 수 찾기
// 입출력 예 설명
// 입출력 예 #1
// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
// 입출력 예 #2
// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.
// n % x === 1이 성립하는 조건문에서 x중 가장 작은 x를 return 하는 것이 조건이므로, for문으로 0부터 N 까지 반복 후 조건 if(n % i === 1)이 되자마자 값을 리턴시킴.

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

solution(10); // expected 3 result 3
