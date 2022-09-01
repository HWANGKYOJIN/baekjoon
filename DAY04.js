// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
// 기본적으로 배열은 String타입으로 간주하고 [100,90,70].sort() 하게되면 100과 90을 비교할때 첫자리인 1 < 9 를 비교하고 100이 90보다 작다고 생각한다.
// MDN 을 참조해보면 arr.sort([compareFunction]) sort는 함수를 인자로 받는다. sort((100,90) => 100 - 90) 양수면 a < b [90,100]으로 제대로 출력된다. [a,b,d,w,e,t] 와같은 문자열은 .sort() 만 해줘도 정상적으로 오름차순으로 정리가 된다.
// sort((a,b) => a-b) 오름차순 // sort((a,b) => b-a) 내림차순

function solution(array, commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    const result = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b)[commands[i][2] - 1];
    answer.push(result);
  }
  return answer;
}

array = [1, 5, 2, 6, 3, 7, 4];
commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];
solution(array, commands);
