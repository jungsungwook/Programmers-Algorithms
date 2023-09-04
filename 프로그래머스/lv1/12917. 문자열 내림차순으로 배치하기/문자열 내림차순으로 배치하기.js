function solution(s) {
    var answer = [...s];
    answer.sort((a,b)=> b.charCodeAt(0) - a.charCodeAt(0));
    answer = answer.join('');
    return answer;
}