function solution(nums) {
    let answer = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if(isPrimeNumber(sum)) answer++;
            }
        }
    }
    return answer;
}


function isPrimeNumber(sum) {
    for(let i = 2; i < sum; i++) {
        if(sum % i === 0) return false;
    }
    return sum > 1;
}