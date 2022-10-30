// [3차] 압축
// 문제 설명
// 압축

function solution(msg) {
    // 글자들의 색인 번호를 지정하기 위해 설정되는 객체
    const dictionary = {};
    let index = 1;
    for (let i = 65; i <= 90; i++) {
        dictionary[String.fromCharCode(i)] = index;
        index++;
    }

    const answer = [];
    let str = ""; // 여러개의 글자를 담기 위한 변수

    for (let i = 0; i < msg.length; i++) {
        str += msg[i];
        const next = str + msg[i + 1];
        if (dictionary[next] === undefined) {
            // 만약 바로 뒤의 한글자까지 포함한 문자가 색인 번호가 없다면,
            if (msg[i + 1] !== undefined) {
                dictionary[next] = index;
            }
            index++;
            answer.push(dictionary[str]);
            str = "";
        }
    }
    return answer;
}
