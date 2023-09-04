function solution(k, score) {
    var answer = [];
    const rank = [];

    score.forEach((e, i) => {
        if (i < k) {
            rank.push(e);
            rank.sort((a, b) => b - a);
            answer.push(Math.min(...rank));
            return;
        }
        if (Math.min(...rank) < e) {
            rank.push(e);
            rank.sort((a, b) => b - a);
            rank.pop();
        }
        answer.push(Math.min(...rank));
    });
    return answer;
}