function solution(n, wires) {
    let answer = Number.MAX_VALUE;
    let count = 0;

    function bfs(node){
        let visited = [];
        let needVisit = [node];

        while(needVisit.length !== 0) {
            let cursor = needVisit.shift();
            wires.forEach((wire) => {
                if(wire.includes(cursor)){
                    let other = wire[0] === cursor ? wire[1] : wire[0];
                    if(!visited.includes(other)){
                        needVisit.push(other);
                    }
                }
            });
            visited.push(cursor);
        }
        return visited.length;
    }

    while(count !== wires.length) {
        let cursor = wires.shift();
        let n1 = cursor[0];
        let n2 = cursor[1];
        answer = Math.min(answer, Math.abs(bfs(n1) - bfs(n2)));
        wires.push(cursor);
        count++;
    }
    return answer;
}