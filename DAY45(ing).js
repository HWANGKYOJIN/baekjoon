// 테스트케이스만 통과함 아직 못함

function solution(s) {
    let answer = s
        .toLowerCase()
        .replace(/\s{2,}/g, " ")
        .trim()
        .split(" ");
    console.log(answer);
    let result = "";
    for (let i = 0; i < answer.length; i++) {
        result += answer[i].replace(/^[a-z]/g, answer[i][0].toUpperCase());
        result += " ";
    }
    return result.trim();
}
