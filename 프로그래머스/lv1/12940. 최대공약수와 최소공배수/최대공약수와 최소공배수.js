function solution(n, m) {
    const max = Math.max(...[n, m]);
    const min = Math.min(...[n, m]);
    var answer = [];
    for (let i = min; i > 0; i--) {
        if (max % i === 0 && min % i === 0) {
            answer.push(i);
            break;
        }
    }
    for (let i = 1; i <= max; i++) {
        if (min * i % max == 0) {
            answer.push(min * i);
            break;
        }
    }
    return answer;
}