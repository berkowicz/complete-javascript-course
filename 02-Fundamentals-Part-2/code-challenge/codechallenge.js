"use strict";
// Challenge 1
/* 
const scoreD = [85, 54, 41];
const scoreK = [23, 34, 27];

let calcAverage = (game1, game2, game3) => (game1 + game2 + game3) / 3;

const avrScoreD = calcAverage(scoreD[0], scoreD[1], scoreD[2]);
console.log(avrScoreD);

const avrScoreK = calcAverage(scoreK[0], scoreK[1], scoreK[2]);
console.log(avrScoreK);

const checkWinner = (avrScoreD, avrScoreK) => {
  if (avrScoreD > avrScoreK) {
    console.log(`Dolphins wins width ${avrScoreD} to ${avrScoreK}`);
  } else {
    console.log(`Koalas wins width ${avrScoreK} to ${avrScoreD}`);
  }
};

checkWinner(avrScoreD, avrScoreK);
 */

//////////////////////////////////////////////////////////////////////

// Challange 2

/* 
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);
 */

///////////////////////////////////////////////////////////////////////

// Challange 3

/* 
const mark = {
  firstName: "Mark",
  lastName: "Miller",
  hight: 1.69,
  weight: 78,

  calcBMI: function () {
    const bmi = this.weight / this.hight ** 2;
    return bmi;
  },
};

const john = {
  firstName: "John",
  lastName: "Miller",
  hight: 1.95,
  weight: 92,

  calcBMI: function () {
    const bmi = this.weight / this.hight ** 2;
    return bmi;
  },
};

console.log(
  `${mark.firstName} ${mark.lastName}s BMI of ${mark.calcBMI()} is ${
    mark.calcBMI() > john.calcBMI() ? "higher" : "lower"
  } then ${john.firstName} ${john.lastName}s of ${john.calcBMI()}`
);
 */

/////////////////////////////////////////////////////////////////////////

// Challenge 4

/* 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];
let sum;

//Bill + tip
const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(bills[i] + tips[i]);
}
console.log(tips, total);

//Average total cost
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAverage(bills));
console.log(calcAverage(tips));
 */

//////////////////////////////////////////////////////////////////////////////////
