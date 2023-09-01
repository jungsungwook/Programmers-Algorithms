def solution(gems):
    gems_dict = {}
    answer = [0, 0]
    temp = []
    start, end = 0, 0
    gems_len, gem_kind = len(gems), len(set(gems))
    while True:
        k = len(gems_dict)
        if start == gems_len:
            break;
        if k == gem_kind:
            temp.append((start,end))
            if not (gems[start] in gems_dict):
                gems_dict[gems[start]] = 0
            gems_dict[gems[start]] -= 1
            if gems_dict[gems[start]] == 0:
                del gems_dict[gems[start]]
            start +=1
            continue
        if end == gems_len:
            break;
        if k != gem_kind:
            if not (gems[end] in gems_dict):
                gems_dict[gems[end]] = 0
            gems_dict[gems[end]] +=1 
            end+=1
            continue
    length = float('inf')
    for a,b in temp:
        if length > b-a:
            length = b-a
            answer[0] = a + 1
            answer[1] = b
    return answer