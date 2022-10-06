// [1차] 비밀지도
// 문제 설명
// 비밀지도
// 푸는중..
// === 를 쓸때는 타입까지 신경쓰자. === 를 쓰고있지만 조건문에서는 나는 숫자 0 , 1과 계속비교했다. 숫자 0과 1로 비교하는것이 아니라 '0' 이나 '1'로 했어야한다..
// 이걸몰라서 3일이 걸렸다.

// function solution(n, arr1, arr2) {
//     let answer = "";
//     let answer2 = [];
//     let map1 = [];
//     let map2 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         map1.push(arr1[i].toString(2).padStart(n, 0));
//         map2.push(arr2[i].toString(2).padStart(n, 0));
//         for (let j = 0; j < arr1.length; j++) {
//             (map1[i][j] === 1) | (map2[i][j] === 1)
//                 ? (answer += " ")
//                 : (answer += "#");
//             console.log(map1[i][j], map2[i][j]);
//         }
//         answer2.push(answer);
//         answer = "";
//     }
//     return answer2;
// }

function solution(n, arr1, arr2) {
    let answer = "";
    let answer2 = [];
    let map1 = [];
    let map2 = [];
    for (let i = 0; i < arr1.length; i++) {
        map1.push(arr1[i].toString(2).padStart(n, 0));
        map2.push(arr2[i].toString(2).padStart(n, 0));
    }
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (map1[i][j] === "0" && map2[i][j] === "0") {
                answer += " ";
            } else {
                answer += "#";
            }
        }
        answer2.push(answer);
        answer = "";
    }
    return answer2;
}
