function solution(nums) {
    var answer = 0;
    const numList = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                numList.push(nums[i] + nums[j] + nums[k])
            }
        }
    }

    numList.forEach(num => {
        let check = true
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) check = false
        }
        if (check) answer += 1;
    })

    return answer;
}