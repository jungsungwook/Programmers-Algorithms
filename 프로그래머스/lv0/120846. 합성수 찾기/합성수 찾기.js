function solution(n) {
    let count = 0;
    for(let i = 1 ; i <= n ; i++){
        let count_yak = 0;
        for(let j = 1 ; j <= i ; j++){
            if(i % j == 0) count_yak ++;
        }
        if(count_yak >= 3) count ++;
    }
    return count;
}