def solution(price, money, count):
    temp = 0
    for c in range(1,count+1):
        temp += c*price
    if money-temp>0:
        return 0
    else:
        return abs(money-temp)