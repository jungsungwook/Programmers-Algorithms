function solution(survey, choices) {
    let type = [
        ["R", "T"],
        ["C", "F"],
        ["J", "M"],
        ["A", "N"],
    ];

    let score = type.reduce((acc, cur) => {
        acc[cur[0]] = 0;
        acc[cur[1]] = 0;
        return acc;
    }
        , {});

    for (let i = 0; i < survey.length; i++) {
        const _f = survey[i].split("")[0];
        const _s = survey[i].split("")[1];
        if (choices[i] - 4 > 0) {
            score[_s] += choices[i] - 4;
        } else if (choices[i] - 4 < 0) {
            score[_f] += Math.abs(choices[i] - 4);
        }
    }

    let answer = '';

    for (let t in type) {
        const t_a = type[t][0];
        const t_b = type[t][1];
        if (score[t_a] > score[t_b]) answer += t_a;
        else if (score[t_a] < score[t_b]) answer += t_b;
        else t_a.localeCompare(t_b) == -1 ? answer += t_a : answer += t_b;
    }

    return answer;
}