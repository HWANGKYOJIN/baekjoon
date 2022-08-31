// sort 로 오름차순으로 배열순서를 정리해줬어야 하는데 생각못했음. (두개의 배열을 비교할때 차례차례 비교를 위해 sort()로 우선적으로 배열의 차순을 같게 만들어 준 후에 두 배열을 비교해서 처리하자.
// 완주하지 못한 선수

function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
