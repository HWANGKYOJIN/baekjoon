// 오픈채팅방
// 문제 설명
// 오픈채팅방
// 카카오톡 오픈채팅방에서는 친구가 아닌 사람들과 대화를 할 수 있는데, 본래 닉네임이 아닌 가상의 닉네임을 사용하여 채팅방에 들어갈 수 있다.
// 신입사원인 김크루는 카카오톡 오픈 채팅방을 개설한 사람을 위해, 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기로 했다.
// 채팅방에 누군가 들어오면 다음 메시지가 출력된다.

function solution(record) {
    let answer = [];

    let users = {};
    for (let i = 0; i < record.length; i++) {
        const infos = record[i].split(" ");
        if (infos[2]) {
            users[infos[1]] = infos[2];
        }

        if (infos[0] !== "Change") {
            answer.push({
                action: infos[0],
                uid: infos[1],
            });
        }
    }
    for (let idx in answer) {
        answer[idx] =
            users[answer[idx].uid] +
            (answer[idx].action === "Enter"
                ? "님이 들어왔습니다."
                : "님이 나갔습니다.");
    }
    return answer;
}
