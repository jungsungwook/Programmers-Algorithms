def solution(players, m, k):
    answer = 0
    active_server = 1
    history = []
    for pi in range(len(players)):
        for idx in range(len(history)):
            if history[idx][0] == pi:
                active_server -= history[idx][1]
                history.pop(idx)
                break;
                
        if players[pi] >= m * active_server: # 현재 접속자 수와 서버*수용가능 비교
            # 만약 접속자 수가 많다면
            remain = players[pi] - (m * (active_server-1)) # 초과된 접속자 수 계산
            need = remain // m
            answer += need # 증설 횟수 증가
            active_server += need # 증설 된 서버의 수 증가
            history.append([pi+k, need]) # 증설 된 서버의 종료 시간 입력
        
    return answer