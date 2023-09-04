function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a)
    score.forEach((s, i) => {
        if (i % m === 0) {
            const groupBox = score.slice(i, i + m)
            if (groupBox.length === m) {
                answer += (Math.min(...groupBox) * m)
            }
        }
    })
    return answer;
}
// 이 코드는 왜 안되는건지 모르겠네...
// function solution(k, m, score) {
//     var answer = 0;
//     const boxes = [];
//     const boxCount = parseInt(score.length / m)
//     score.sort((a, b) => b - a);
//     for (let i = 0; i < boxCount; i++) {
//         const box = [];
//         for (let j = 0; j < m; j++) {
//             let apple = score.shift();
//             box.push(apple);
//         }
//         boxes.push(box);
//     }
//     boxes.forEach((e)=>{
//       answer += Math.min(...e) * m;
//     })
//     return answer;
// }