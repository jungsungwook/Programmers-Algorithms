function solution(sizes) {
    let max_1 = 0, max_2 = 0;
    const sizesTemp = sizes.map((e)=>{
        if(e[0] > e[1]) return e;
        else return [e[1], e[0]]
    })
    sizesTemp.forEach((e)=>{
        if(e[0]>max_1) max_1 = e[0];
        if(e[1]>max_2) max_2 = e[1];
    })
    
    return max_1 * max_2;
}