def solution(n, q, ans):
    answer = []
    for a in range(1, n+1):
        for b in range(a+1, n+1):
            for c in range(b+1, n+1):
                for d in range(c+1, n+1):
                    for e in range(d+1, n+1):
                        tmp = [a,b,c,d,e] # 오름차순 랜덤 코드
                        valid = True
                        for q_index in range(len(q)):
                            sys_answer = ans[q_index]
                            count = 0
                            for t in q[q_index]:
                                if t in tmp:
                                    count +=1
                            if sys_answer != count:
                                valid = False
                        if valid:
                            answer.append(tmp)
    return len(answer)
                        