function solution(dartResult) {
    var answer = 0;
    let score = [];
    let step = -1;
    let num = ""
    for (let i = 0; i < dartResult.length; i++) {
        let target = dartResult[i];
        if (!isNaN(target)) {
            num += target;
            if (!isNaN(dartResult[i + 1])) {
                continue;
            }
            num = Number(num);
            step += 1;
        } else {
            if (target == "D") num = num * num;
            else if (target == "T") num = num * num * num;

            if (i < dartResult.length - 1) {
                if (dartResult[i + 1] == "*") {
                    if (step == 0) {
                        num *= 2;
                    } else {
                        num *= 2;
                        score[step - 1] *= 2
                    }
                    score[step] = num;
                    num = "";
                    i++;
                } else if (dartResult[i + 1] == "#") {
                    num *= -1;
                    score[step] = num;
                    num = "";
                    i++;
                } else {
                    score[step] = num;
                    num = "";
                }
            } else {
                score[step] = num;
                num = "";
            }
        }
    }
    score.forEach((e)=>{
        answer += e;
    })
    return answer;
}