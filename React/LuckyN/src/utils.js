function d6(){
    return Math.floor(Math.random()*6)+1;
}

function getRolls(n){
    return Array.from({length: n}, ()=>d6())
}

function sum(nums){
    return nums.reduce((prev, cur) => prev + cur, 0)
}

function allSum(nums, goal) {
    const result = sum(nums)
    return result === goal
    
}

function lessThan(dice, goal){
    return sum(dice, goal) < goal;
}



export {d6, getRolls, sum, lessThan, allSum}

