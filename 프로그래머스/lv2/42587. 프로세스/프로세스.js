function solution(priorities, location) {
    let answer = 0;
    const copy = [...priorities];
    const idx = priorities.map((p, i) => ({
        p,
        i
    }))

    while (idx.length !== 0) {
        const maxPriority = Math.max(...copy);
        const {
            p,
            i
        } = idx.shift();
        if (p >= maxPriority) {
            answer++;
            copy[i] = 1;
            if (i == location) break;
        } else {
            idx.push({
                p,
                i
            })
        }
    }
    return answer;
}