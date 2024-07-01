function solution(today, terms, privacies) {
    let terms_dict = {};
    var answer = [];
    for(let i = 0 ; i < terms.length ; i ++) {
        const p = terms[i].split(" ")[0];
        const d = terms[i].split(" ")[1];
        terms_dict[p] = parseInt(d);
    }
    
    for(let i = 0 ; i < privacies.length ; i ++){
        const join_date = privacies[i].split(" ")[0];
        const term = privacies[i].split(" ")[1];
        const result = isValidDate(today, join_date, terms_dict[term]);
        if(result == false) answer.push(i+1);
    }
    
    return answer;
}

function isValidDate(today, join_date, valid_date) {
    let today_y = parseInt(today.split(".")[0]);
    let today_m = parseInt(today.split(".")[1]);
    const today_d = parseInt(today.split(".")[2]);
    
    let join_y = parseInt(join_date.split(".")[0]);
    let join_m = parseInt(join_date.split(".")[1]);
    const join_d = parseInt(join_date.split(".")[2]);
    
    let target_y = join_y;
    let target_m = join_m;
    
    target_m += valid_date;
    if(target_m > 12) {
        const over = Math.floor(target_m / 12);
        const over_remain = target_m % 12 ;
        target_y += over;
        if(over_remain == 0){
            target_y -= 1;
            target_m = 12;
        }else target_m = over_remain;
    }
    
    if(target_y > today_y) return true;
    else if(target_y < today_y) return false;
    else {
        if(target_m > today_m) return true;
        else if(target_m < today_m) return false;
        else {
            if(join_d > today_d) return true;
            else return false;
        }
    }

    return true;
}