// 프린터
// 문제 설명
// 일반적인 프린터는 인쇄 요청이 들어온 순서대로 인쇄합니다. 그렇기 때문에 중요한 문서가 나중에 인쇄될 수 있습니다.
// 이런 문제를 보완하기 위해 중요도가 높은 문서를 먼저 인쇄하는 프린터를 개발했습니다. 이 새롭게 개발한 프린터는 아래와 같은 방식으로 인쇄 작업을 수행합니다.

function solution(priorities, location) {
    const origin = priorities[location];
    priorities[location] = "a";

    let answer = 0;
    while (true) {
        const search = priorities.indexOf("a");
        priorities[search] = origin;
        const max = Math.max(...priorities);
        priorities[search] = "a";

        if (priorities[0] === "a") {
            if (origin === max) {
                return ++answer;
            }
        }

        if (priorities[0] === max) {
            priorities.shift();
            answer++;
        } else {
            priorities.push(priorities[0]);
            priorities.shift();
        }
    }
}
