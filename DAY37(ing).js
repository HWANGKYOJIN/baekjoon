// [1차] 비밀지도
// 문제 설명
// 비밀지도
// 푸는중..

function solution(n, arr1, arr2) {
    let answer = "";
    let answer2 = [];
    let map1 = [];
    let map2 = [];
    for (let i = 0; i < arr1.length; i++) {
        map1.push(arr1[i].toString(2).padStart(n, 0));
        map2.push(arr2[i].toString(2).padStart(n, 0));
        for (let j = 0; j < arr1.length; j++) {
            (map1[i][j] === 1) | (map2[i][j] === 1)
                ? (answer += " ")
                : (answer += "#");
            console.log(map1[i][j], map2[i][j]);
        }
        answer2.push(answer);
        answer = "";
    }
    return answer2;
}
