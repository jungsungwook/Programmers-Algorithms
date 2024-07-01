function solution(friends, gifts) {
    let send_history = {};
    let recv_history = {};
    let gift_score = {};
    let ans = {};
    for(f in friends) {
        send_history[friends[f]]= {};
        recv_history[friends[f]]= {};
        ans[friends[f]] = 0;
        gift_score[friends[f]] = 0;
    }
    for(g in gifts) {
        const tmp = gifts[g].split(" ");
        const A = tmp[0];
        const B = tmp[1];
        if(send_history[A][B]) send_history[A][B] ++;
        else send_history[A][B] = 1;
        
        if(recv_history[B][A]) recv_history[B][A] ++;
        else recv_history[B][A] = 1;
    }
    
    // 선물 지수 계산
    for(f in friends) {
        let total_send = 0;
        let total_recv = 0;
        for(let key in send_history[friends[f]]){
            total_send += send_history[friends[f]][key];
        }
        for(let key in recv_history[friends[f]]){
            total_recv += recv_history[friends[f]][key];
        }
        gift_score[friends[f]] = total_send - total_recv;
    }
    
    for(let i = 0 ; i < friends.length ; i ++){
        for(let j = i + 1 ; j < friends.length ; j ++){
            // 1. 두 사람 간 선물을 주고받은 기록 확인
            const a_name = friends[i];
            const b_name = friends[j]
            let a_cnt = send_history[a_name][b_name] != undefined ? send_history[a_name][b_name] : 0;
            let b_cnt = send_history[b_name][a_name] != undefined ? send_history[b_name][a_name] : 0;
            if(a_cnt > b_cnt) {
                ans[a_name] ++;
            }else if(b_cnt > a_cnt){
                ans[b_name] ++;
            }else {
                // 선물 지수가 더 큰 사람이 받음
                if(gift_score[a_name] > gift_score[b_name]) ans[a_name] ++;
                else if(gift_score[b_name] > gift_score[a_name]) ans[b_name] ++;
            }
        }
    }
    
    let maxValue = -Infinity;  // 어떤 값보다도 작게 초기화

    // 객체 순회
    for (let key in ans) {
        if (ans.hasOwnProperty(key)) {
            if (ans[key] > maxValue) {
                maxValue = ans[key];
            }
        }
    }

    var answer = maxValue;
    return answer;
}