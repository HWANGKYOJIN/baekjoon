// 정수 제곱근 판별
// 입출력 예
// n	return
// 121	144
// 3	-1
// 처음 엣지케이스를 설정 한후 따로 따로 실행해보면 올바른 정답이 나왔는데 두개의 if 문을 합치기만하면 하나의 값으로 고정되어 값이 출력되었는데 (항상이런문제를 자주 겪었지만) 아직 그 문제 해결방법에 대해 모호했지만
// 이번문제로 인해 return answer를 어디에 해야하는 지 조금 더 익숙해 졌다.

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i * i !== n) {
      answer = -1;
    } else if (i * i === n) {
      answer = i + 1;
      return answer * answer;
    }
  }
  return answer;
}
