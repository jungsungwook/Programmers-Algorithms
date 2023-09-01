function solution(spell, dic) {
    for(let i = 0 ; i < dic.length; i ++){
        let count = spell.length;
        for(let j = 0 ; j < spell.length; j++){
            if(dic[i].indexOf(spell[j]) != -1) count -= 1; 
        }
        if(count == 0) return 1;
    }
    return 2;
}