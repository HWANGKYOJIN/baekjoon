// 모의고사
// 문제 설명
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

function solution(answers) {
    let answer = [];
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let student1 = [1, 2, 3, 4, 5];
    let student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i = 0; i < student1.length; i++) {
        if (answers[i] === student1[i]) {
            count1++;
        }
    }
    for (let i = 0; i < student2.length; i++) {
        if (answers[i] === student2[i]) {
            count2++;
        }
    }
    for (let i = 0; i < student3.length; i++) {
        if (answers[i] === student3[i]) {
            count3++;
        }
    }
    if (count1 === count2 && count2 === count3) {
        answer.push(1, 2, 3);
    }
    if (count1 > count2 && count1 > count3) {
        answer.push(1);
    }
    return answer;
    if (count2 > count1 && count2 > count3) {
        answer.push(2);
    }
    return answer;
    if (count3 > count1 && count3 > count1) {
        answer.push(3);
    }
    return answer;
    if (count1 === count2 && count1 > count3) {
        answer.push(1, 2);
    }
    if (count1 === count2 && count1 < count3) {
        answer.push(3);
    }
    if (count1 === count3 && count1 > count2) {
        answer.push(1, 3);
    }
    if (count1 === count3 && count1 < count2) {
        answer.push(2);
    }
    if (count2 === count3 && count2 > count1) {
        answer.push(2, 3);
    }
    if (count2 === count3 && count2 < count1) {
        answer.push(1);
    }
    return answer.sort((a, b) => a + b);
}
