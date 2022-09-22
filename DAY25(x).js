// 최대공약수와 최소공배수
// 문제 설명
// 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
// 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3,
// 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// 최대 공약수는 쉽게 구했는데 최소공배수를 못구함.
function solution(a, b) {
    let max = 0;
    for (let i = 1; i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            max = i;
        }
    }
    let min = 0;
    for (let i = b; i <= b * a; i += b) {
        if (i % a === 0) {
            min = i;
            break;
        }
    }
    return [max, min];
}
