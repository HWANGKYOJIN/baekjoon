// 문자열 내 마음대로 정렬하기
// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

//내 풀이 테스트케이스 통과못함.
//Sort() 공부해기 -->
// 1. compareFunction(a,b) < 0 a를 b보다 작은 색인으로 정렬 즉, a가 먼저나온다.
// 2. compareFunction(a,b) = 0 안바꿈
// 3. compareFunction(a,b) > 0 a를 b보다 큰 색인으로 정렬 즉, b가 먼저나온다. function compare(a, b) {
//   if (a is less than b by some ordering criterion) {
//     return -1;
//   }
//   if (a is greater than b by the ordering criterion) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }
function solution(strings, n) {
    const result = [];
    for (let i = 0; i < strings.length; i++) {
        if (strings[i][n] == strings[i] + (1)[n]) {
            console.log(strings[i][n]);
            return strings.sort();
        }
        result.push(strings[i][n]);
        result.sort();
        for (let j = 0; j < result.length; j++) {
            if (result[j] === strings[i][n]) {
                result[j] = strings[i];
            }
        }
    }
    return result;
}
// 참조한코드
function solution(strings, n) {
    strings.sort((a, b) => {
        if (a[n] < b[n]) {
            return -1;
        } else if (a[n] > b[n]) {
            return 1;
        } else if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        }
    });
    return strings;
}
