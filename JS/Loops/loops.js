for (let i = 1; i<=25; i++){
    console.log(i)
};

for(let i = 0; i<=20;i++){
    if(i%2===0){
        console.log(i)
    }
}

for (let i =100; i>=0; i-=10){
    console.log(i)
}

for (let i = 1; i <=10; i++){
    console.log(`i is: ${i}`);
    for(let j = 1; j<=4;j++){
        console.log(`   j is: ${j}`)
    }
}

const numbers = [1,2,3,4,5,6,7,8,9];

for (let number of numbers) {
    console.log(`count to ${number}`)
}

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedra: 81,
    vonnie: 60
}
// To Iterate over an object you should use for...in
for (let person in testScores){
    console.log(`${person} scored ${testScores[person]}`)
}

let sum = 0;
let scores = Object.values(testScores);
for (let score of scores){
    sum += score;
}
console.log(sum/scores.length)