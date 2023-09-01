function solution(board, skill) {
    let aboard = [];
    for (let i = 0; i < board.length + 1; i++) {
        aboard.push(Array(board[0].length + 1).fill(0));
    }
    for (s of skill) {
        if (s[0] == 1) {
            prefixSum(aboard, s[1], s[2], s[3], s[4], -s[5]);
        } else {
            prefixSum(aboard, s[1], s[2], s[3], s[4], +s[5]);
        }
    }

    for (let i = 0; i < aboard.length; i++) {
        for (let j = 1; j < aboard[i].length; j++) {
            aboard[i][j] = aboard[i][j - 1] + aboard[i][j];
        }
    }
    for (let i = 1; i < aboard.length; i++) {
        for (let j = 0; j < aboard[i].length; j++) {
            aboard[i][j] = aboard[i - 1][j] + aboard[i][j];
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] += aboard[i][j];
        }
    }

    var answer = 0;
    board.forEach((row) => {
        row.forEach((col) => {
            if (col > 0) {
                answer++;
            }
        });
    });
    return answer;
}

function prefixSum(aboard, x1, y1, x2, y2, degree) {
    aboard[x1][y1] += degree;
    aboard[x2 + 1][y2 + 1] += degree;

    aboard[x1][y2 + 1] -= degree;
    aboard[x2 + 1][y1] -= degree;
}
