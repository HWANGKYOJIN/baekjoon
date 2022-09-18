// 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다
// 처음에 sort해서 내림차순으로 배열 정렬 후 마지막 인덱스만 제거 하고 테스트 코드 통과 후 length 도 -1 일때 [-1] 반환 후 채점하니 모두 실패해서 생각해보니 배열이 바뀌어서 모든 테스트가 통과되지 못함. 처음 문제를 접하고 이틀 삼일뒤에 푼 것이지만 그래도 처음엔 아무것도 생각못했는데 오늘 sort를 써볼까? 라는 생각을 하긴함. 저번에 내림차순 오름차순 sort없이 푸는 문제에서 min값을 for문으로 구하는 방법을 참고했던거 같은데 역시 내가 푼문제가 아니다보니 다시 생각나지않음. 혼자힘으로 못 푼 문제는 통과 직후 2~3번 다시 코드 작성해보고 다음날 아침에 다시 한번 풀어볼 예정임.

function solution(arr) {
    let answer = [];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            answer.push(arr[i]);
        }
    }
    return arr.length === 1 ? [-1] : answer;
}
