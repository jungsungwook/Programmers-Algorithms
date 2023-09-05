// 개인적으로 일반화 과정을 파악하기 어려웠던 문제..
// 1. 1번의 n개 중 n-1개를 2번으로 옮긴다.
// 2. 1번의 가장 큰 n을 3번으로 옮긴다.
// 3. 2번의 n-1개를 3번으로 옮긴다.
// 위 세가지 과정을 통해 진행.

function solution(n) {
    let answer = [];

    function hanoi(n, start, end, mid) {
        if (n === 1) {
            answer.push([start, end]);
            return;
        }
        hanoi(n - 1, start, mid, end);
        answer.push([start, end]);
        hanoi(n - 1, mid, end, start);
    }
    hanoi(n, 1, 3, 2);
    return answer;
}