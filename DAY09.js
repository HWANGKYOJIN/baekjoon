//  가운데 글자 가져오기

function solution(s) {
  const center = Math.floor(s.length / 2);
  //   console.log(center);
  const answer =
    s.length % 2 !== 0 ? s[center] : s.slice(center - 1, center + 1);
  console.log(answer);
}

s = "abcde";
solution(s);
