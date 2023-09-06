function solution(maps) {
    var answer = [];
    const map_split = maps.map((e) => e.split(""));
    let visited = new Array(map_split.length).fill(0);
    for (let i = 0; i < map_split.length; i++) {
        visited[i] = new Array(map_split.length).fill(0);
    }
    for (let i = 0; i < map_split.length; i++) {
        for (let j = 0; j < map_split[i].length; j++) {
            const result = bfs(i, j);
            if (result > 0) answer.push(result);
        }
    }
    if (answer.length == 0) answer.push(-1);
    return answer.sort((a, b) => a - b);

    function bfs(x, y) {
        if (map_split[x][y] == 'X') return 0;
        if (visited[x][y] == 1) return 0;

        visited[x][y] = 1;
        let r = 0,
            d = 0,
            l = 0,
            u = 0;
        if (y < map_split[x].length - 1) r = bfs(x, y + 1);
        if (x < map_split.length - 1) d = bfs(x + 1, y);
        if (y > 0) l = bfs(x, y - 1);
        if (x > 0) u = bfs(x - 1, y);
        return Number(map_split[x][y]) + r + l + u + d;
    }
    return answer;
}