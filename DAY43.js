// 신규 아이디 추천
// 문제 설명
// 카카오에 입사한 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다.
// "네오"에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때,
// 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.
// 다음은 카카오 아이디의 규칙입니다.

// 정규표현식 공부해보기

function solution(new_id) {
    let answer = new_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, "")
        .replace(/\.{2,}/g, ".")
        .replace(/^\.|\.$/g, "")
        .replace(/^$/g, "a")
        .substring(0, 15)
        .replace(/\.$/g, "");
    if (answer.length <= 2) {
        const str = answer[answer.length - 1];
        for (let i = 0; answer.length < 3; i++) {
            answer += str;
        }
    }
    return answer;
}
