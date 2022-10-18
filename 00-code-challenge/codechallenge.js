// Challenge 1
/*
const massMark = 78;
const massJohn = 92;
const hightMark = 1.69;
const hightJohn = 1.95;

function bmi(mass, hight){
    return mass/(hight ** 2)
}

const markBmi = bmi(massMark, hightMark);
const johnBmi = bmi(massJohn, hightJohn);
const markHigherBMI = markBmi > johnBmi;

console.log(markBmi, johnBmi, markHigherBMI);

// Challenge 2 if-statement
if (markBmi>johnBmi){
    console.log(`Marks BMI is ${markBmi} and ${markBmi - johnBmi} higher then Johns.`)
} else if (markBmi<johnBmi){
    console.log(`Johns BMI is ${johnBmi} and ${johnBmi - markBmi} higher then Marks.`)
} else{
    console.log(`They both have ${markBmi} BMI.`)
}
*/

///////////////////////////////////////////////////

// Challenge 3
/*
const scoreD = (97 + 112 + 101) / 3;
const scoreK = (109 + 95 + 106) / 3;

console.log(scoreD, scoreK);

if (scoreD > scoreK && scoreD >= 100){
    console.log('Dolphines vinn')
} else if (scoreD < scoreK && scoreK >= 100){
    console.log('Koalas vinn')
} else if (scoreD === scoreK && scoreD >= 100 && scoreK >= 100) {
    console.log('Its a tie')
} else{
    console.log('Noone wins')
}
*/

///////////////////////////////////////////////////

// Challenge 4
const bill = [275, 40, 430];

const tip = [bill[0] >= 50 && bill[0] <= 300 ? bill[0] * 0.15 
: bill[0] * 0.2, 
bill[1] >= 50 && bill[1] <= 300 ? bill[1] * 0.15 
: bill[1] * 0.2, 
bill[2] >= 50 && bill[2] <= 300 ? bill[2] * 0.15 
: bill[2] * 0.2];

console.log(`The bill is ${bill[0]} and the tip is ${tip[0]}`);
console.log(`The bill is ${bill[1]} and the tip is ${tip[1]}`);
console.log(`The bill is ${bill[2]} and the tip is ${tip[2]}`);