def solution(id_list, report, k):
    d = {}
    for i in report:
        name = i.split()[0]
        target = i.split()[1]
        if name in d:
            d[name].append(target)
        else:
            d[name] = []
            d[name].append(target)
    
    for key,value in d.items():
        d[key] = list(set(value))
        
    answer = accountSuspension(d, id_list, k)
    return answer


def accountSuspension(d, id_list, k):
    resultObj = {}
    singoCnt= {}
    for val in d.values():
        for v in val:
            if v in singoCnt:
                singoCnt[v] += 1
            else:
                singoCnt[v] = 1
                
    # 신고한 유저 통보
    for key,value in d.items():
        for val in value: # 신고리스트
            if val in singoCnt: # 신고대상 검색
                if singoCnt[val] >= k:
                    if key in resultObj:
                        resultObj[key] +=1
                    else:
                        resultObj[key] = 1

    returnList = []
    for uid in id_list:
        if uid in resultObj:
            returnList.append(resultObj[uid])
        else :
            returnList.append(0)
    return returnList;