function solution(babbling) {
    var answer = 0;
    let words = ["aya", "ye", "woo", "ma"];
    babbling.forEach((e) => {
        let word = e;
        words.forEach((w) => {
            word = word.replaceAll(w, " ")
        })
        word = word.replaceAll(" ", "")
        if (word.length == 0) answer += 1;
    })
    return answer;
}