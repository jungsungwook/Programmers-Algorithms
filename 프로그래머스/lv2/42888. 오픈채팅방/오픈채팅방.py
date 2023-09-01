def solution(record):
    answer = []
    db = {}
    for r in record:
        temp = r.split(" ")
        if(temp[0] == "Enter"):
            db[temp[1]] = temp[2]
        if(temp[0] == "Change"):
            db[temp[1]] = temp[2]
    for r in record:
        temp = r.split(" ")
        if(temp[0] == "Enter"):
            answer.append(f"{db[temp[1]]}님이 들어왔습니다.")
        if(temp[0] == "Leave"):
            answer.append(f"{db[temp[1]]}님이 나갔습니다.")
    return answer