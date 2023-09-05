function solution(triangle) {
    var answer = BottomTop(triangle);
    console.log(answer)
    return answer;
}

function BottomTop(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
}

// function topBottom(triangle, x, y, sum) {
//     let max = 0;
//     sum += triangle[x][y];
//     if (x >= triangle.length - 1) {
//         return sum;
//     }
//     let left = topBottom(triangle, x+1, y, sum);
//     let right = topBottom(triangle, x+1, y + 1, sum);
//     return left > right ? left: right;
// }