function solution(board) {
    var answer = 0;
    let newBoard = Array.from(Array(board.length+2), () => new Array(board.length+2).fill(0));
 
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            newBoard[i+1][j+1] = board[i][j];
        }
    }
    for(let i = 1 ; i <= board.length; i ++){
        for(let j = 1 ; j <= board[i-1].length; j ++){
            console.log(i,j)
            if(newBoard[i][j]==1){
                if(newBoard[i-1][j] == 0) newBoard[i-1][j] = 2;
                if(newBoard[i][j-1] == 0) newBoard[i][j-1] = 2;
                if(newBoard[i+1][j] == 0) newBoard[i+1][j] = 2;
                if(newBoard[i][j+1] == 0) newBoard[i][j+1] = 2;
                if(newBoard[i-1][j-1] == 0) newBoard[i-1][j-1] = 2;
                if(newBoard[i+1][j+1] == 0) newBoard[i+1][j+1] = 2;
                if(newBoard[i-1][j+1] == 0) newBoard[i-1][j+1] = 2;
                if(newBoard[i+1][j-1] == 0) newBoard[i+1][j-1] = 2;
            }
        }
    }
    newBoard.shift();
    newBoard.pop();
    for(let i=0; i<newBoard.length; i++){
        newBoard[i].shift();
        newBoard[i].pop();
    }
    for(let i = 0 ; i < newBoard.length; i ++){
        for(let j = 0 ; j < newBoard[i].length; j ++){
            if(newBoard[i][j] == 0) answer += 1
        }
    }
    return answer;
}