// 최소직사각형
// 문제 설명
// 명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

// 아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.

function solution(sizes) {
    let answer = 0;
    let result1 = [];
    let result2 = [];
    for (let i = 0; i < sizes.length; i++) {
        for (let j = 0; j < sizes[i].length; j++) {
            if (sizes[i][j] < sizes[i][j + 1]) {
                answer = sizes[i][j];
                sizes[i][j] = sizes[i][j + 1];
                sizes[i][j + 1] = answer;
            }
        }
        result1.push(sizes[i][0]);
        result2.push(sizes[i][1]);
    }
    return Math.max(...result1) * Math.max(...result2);
}
