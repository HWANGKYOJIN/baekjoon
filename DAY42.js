// [1차] 다트 게임
// 문제 설명
// 다트 게임

const isBonus = ["S", "D", "T"];
function solution(dartResult) {
    const answer = [];

    let score = "";
    for (let i = 0; i < dartResult.length; i++) {
        if (isNaN(dartResult[i]) === false) {
            score += dartResult[i];
        } else {
            if (isBonus.includes(dartResult[i])) {
                score = Number(score);

                if (dartResult[i] === "D") {
                    score = Math.pow(score, 2);
                } else if (dartResult[i] === "T") {
                    score = score ** 3;
                }
                answer.push(score);
                score = "";
            } else {
                if (dartResult[i] === "#") {
                    answer[answer.length - 1] *= -1;
                } else {
                    answer[answer.length - 1] *= 2;

                    if (answer.length > 1) {
                        answer[answer.length - 2] *= 2;
                    }
                }
            }
        }
    }
    return answer.reduce((acc, cur) => acc + cur);
}
