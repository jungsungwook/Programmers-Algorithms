function solution(n, arr1, arr2) {
    const answer = [];
    const newArr1 = arr1.map((e)=> jinsoo(e, n));
    const newArr2 = arr2.map((e)=> jinsoo(e, n));
    for(let i = 0 ; i < n ; i ++){
      const arr = [];
      for(let j = 0 ; j < n ; j ++){
        const word = newArr1[i][j] | newArr2[i][j] == 1 ? "#" : " ";
        arr.push(word)
      }
      answer.push(arr);
    }
    const result = answer.map((e)=> e.join(""))
    return result;
}

function jinsoo(n, length){
  let dec = n.toString(2);
  const cnt = (length - dec.length)
  if(length > dec.length){
    for(let i = 0 ; i < cnt; i++){
      dec = "0" + dec;
    }
  }
  return dec.split("");
}