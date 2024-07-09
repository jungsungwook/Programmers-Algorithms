function solution(queue1, queue2) {
    var answer = 0;
    let q1Idx = -1;
    let q2Idx = -1;
    let q1Sum = sumQueue(queue1);
    let q2Sum = sumQueue(queue2);
    let allSum = q1Sum + q2Sum;
    if(allSum % 2 != 0) return -1;
    
    while(q1Sum != q2Sum){
        if(q1Idx >= queue1.length && q2Idx >= queue2.length) {
            answer = -1;
            break;
        }
        if(q1Sum > q2Sum) {
            q1Idx++;
            let target = 0;
            if(q1Idx >= queue1.length){
                target = queue2[q1Idx-queue1.length]
            }else{
                target = queue1[q1Idx]
            }
            q1Sum -= target;
            q2Sum += target;
        }else if(q2Sum > q1Sum){
            q2Idx++;
            let target = 0;
            if(q2Idx >= queue2.length){
                target = queue1[q2Idx-queue2.length]
            }else{
                target = queue2[q2Idx]
            }
            q1Sum += target;
            q2Sum -= target;
        }
        answer++;
    }

    return answer;
}

function sumQueue(q){
    let sum = 0;
    q.forEach(v=>sum+=v);
    return sum;
}