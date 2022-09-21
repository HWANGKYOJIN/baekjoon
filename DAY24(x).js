// 소수 찾기
// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

function solution(n) {
    let arr = Array(n + 1)
        .fill(true)
        .fill(false, 0, 2);
    let result = 0;
    for (let i = 2; i < Number(n ** 0.5) + 1; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === true) {
            result += 1;
        }
    }
    return result;
}
