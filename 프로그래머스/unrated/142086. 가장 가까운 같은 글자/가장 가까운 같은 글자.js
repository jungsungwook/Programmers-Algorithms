function solution(s) {
    var answer = [];
    let prev = ""
    for (let i = 0; i < s.length; i++) {
        let word = s[i];
        let lastWord = prev.lastIndexOf(word);
        console.log(word, lastWord)
        if (prev == "" || lastWord == -1) answer.push(-1)
        if (lastWord > -1) {
            answer.push(i-lastWord)
        }
        prev += word;
    }
    return answer;
}