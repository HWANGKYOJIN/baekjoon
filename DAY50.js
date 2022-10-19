// 스킬트리
// 문제 설명
// 선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.

// 예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

// 위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

// 선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

function solution(skill, skill_trees) {
    let answer = 0;

    for (let i = 0; i < skill_trees.length; i++) {
        let currentIdx = 0; // 선행스킬의 순서를 비교하기 위한 변수

        for (let j = 0; j < skill_trees[i].length; j++) {
            const idx = skill.indexOf(skill_trees[i][j]);

            if (idx !== -1) {
                // 선행스킬 순서에 포함되는 스킬이라면,
                if (idx !== currentIdx) {
                    // 선행스킬을 먼저 배우지 않은 경우 (불가능한 스킬트리)
                    break;
                }
                currentIdx++;
            }

            if (j === skill_trees[i].length - 1) {
                // 마지막을 체크
                // (중간에 반복이 종료되지 않았다. === 필요한 스킬이 모두 선행된 스킬트리)
                answer++;
            }
        }
    }

    return answer;
}
