// 카펫
// 문제 설명
// Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
// 테스트케이스 4,5,6 안돌아감

function solution(brown, yellow) {
    let answer = [];
    let answer2 = [];
    let answer3 = [];
    let result = [];
    let sum = brown + yellow;
    for (let i = 0; i < sum; i++) {
        if (sum % i === 0) {
            answer.push(i);
        }
    }
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] * answer[i] === sum) {
            return [answer[i], answer[i]];
        }
        for (let j = 1; j < brown + yellow; j++) {
            if (answer[i] * answer[i + j] === brown + yellow) {
                answer3.push(answer[i + j], answer[i]);
                answer2.push(answer[i] + answer[i + j]);
                answer2.sort((a, b) => a - b);
            }
        }
    }
    for (let i = 0; i < answer3.length; i++) {
        if (answer3[i] + answer3[i + 1] === answer2[0]) {
            result.push(answer3[i], answer3[i + 1]);
        }
    }
    return result;
}
