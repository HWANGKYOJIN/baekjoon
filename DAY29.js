// 직사각형 별찍기
// 문제 설명
// 이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
// 별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
// 3일만에 푼문제.. 시도해봤던 풀이방법이긴한데, 저번엔 안됬었고 이번엔 됬다. `\n`의 위치를 잘못 찍었던것일까..

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]),
        b = Number(n[1]);
    let result = "";
    for (let j = 0; j < b; j++) {
        for (let i = 0; i < a; i++) {
            result += "*";
        }
        result += `\n`;
    }
    console.log(result);
});
