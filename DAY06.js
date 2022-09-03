// 휴대폰 번호 가리기

function solution(phone_number) {
  let answer = "";
  answer += answer.padStart(phone_number.length - 4, "*");
  answer += phone_number.slice(phone_number.length - 4, phone_number.length);
  console.log(answer);
}

solution("01041230879");
