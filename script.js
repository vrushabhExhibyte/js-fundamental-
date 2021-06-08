

const markmass = 78;
const markheight = 1.69;
const johnmass = 92;
const johnheight = 1.95;

const BMImark = markmass / markheight ** 2;
const BMIjohn = johnmass / (johnheight * johnheight)

console.log(BMImark, BMIjohn);


const firstName = 'vrushabh';
const age = 18;
const birthYear = 2002;

const idea = `${firstName}, ${age}, ${birthYear}`;
console.log(idea);

console.log(`lion\ntiger`);


const birthYear = 2000;
console.log(String(birthYear));
console.log(birthYear + 18);
console.log(typeof (birthYear));


const money = 0;
if (money) {
    console.log(`job`);
} else {
    console.log(`not job`);
}

const favourite = Number(prompt(`favourite number`));
if (favourite == 16) {
    console.log("king`s birthday");
} else if (favourite == 04) {
    console.log("king was coming in the world")
}
else {
    console.log("nothing");
}

const bill = 275;
const tip = bill >= 300 && bill <= 50 ? bill * 0.15 : bill * 0.20;
console.log(`the bill is ${bill} , the tip is ${tip}, the total ${bill + tip}`);

const bill2 = 40;
const tip2 = bill2 >= 300 && bill2 <= 50 ? bill2 * 0.15 : bill2 * 0.20;
console.log(`the bill is ${bill2} , the tip is ${tip2}, the total ${bill2 + tip2}`);

const bill3 = 430;
const tip3 = bill3 >= 300 && bill3 <= 50 ? bill3 * 0.15 : bill3 * 0.20;
console.log(`the bill is ${bill3} , the tip is ${tip3}, the total ${bill3 + tip3}`);


function loger() {
    console.log("javascript");
}

loger();


function food(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples, ${oranges} oranges`;
    return juice;

}
const applejuice = food(5, 9);
console.log(applejuice);


function calAge(birthYear) {
    return 2037 - birthYear;

}
const c1 = calAge(1992);
console.log(c1);

function food(oranges, apple) {
    return oranges + apple;

}
console.log(food(5, 6));


const calAge = birthYear => {
    const b1 = 2037 - birthYear;
    const Age = 65 - b1;
    return Age;
}
console.log(calAge(1991));



const calAge = function (birthYear) {
    return 2037 - birthYear;
}

const A1 = function (birthYear) {
    const Age = calAge(birthYear);
    const retirment = 65 - Age;
    return retirment;

}

console.log(A1(1991));
console.log(A1(1992));



const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

let scoreD = calcAverage(44, 32, 81);
let scoreK = calcAverage(65, 61, 51);
console.log(scoreD, scoreK);

const checkWinner = function (avgD, avgK) {
    if (avgD >= 2 * avgK) {
        console.log(`Dolphins win (${avgD} vs. ${avgK})`);
    } else if (avgK >= 2 * avgD) {
        console.log(`Koalas win (${avgK} vs. ${avgD})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreD, scoreK);

checkWinner(404, 101);



const friends = [`rahul`, `mihir`, `parth`];
friends.push(`hmm`);
friends.pop();
console.log(friends);

console.log(friends[0]);


const age = 45;
const firstName = `vrushabh`;
const v1 = [firstName, `mihir`, age]
console.log(v1);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);



const myObj = {
    firstName: 'vrushabh',
    lastName: 'vasoya',
    age: 2037 - 2002,
    job: 'programmer',
    friends: ['hmm1', 'hmm2', 'hmm3']
};

console.log(myObj);
console.log(myObj.job);


const interestedIn = prompt('What do you want to know about vrushabh? Choose between firstName, lastName, age, job, and friends');

if (myObj[interestedIn]) {
    console.log(myObj[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}



const myObj = {
    firstName: 'vrushabh',
    lastName: 'vasoya',
    age: 2037 - 2002,
    job: 'programmer',
    friends: ['hmm1', 'hmm2', 'hmm3'],


    calAge: function (birthYear) {
        return 2037 - birthYear;
    }
};
console.log(myObj.calAge(2002));


const mark = {
    fullName: 'vrushabh',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const mark1 = {
    fullName: 'rahul',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

mark.calcBMI();
mark1.calcBMI();

console.log(mark.bmi, mark1.bmi);



for (let i = 0; i <= 10; i++) {
    console.log("vrushabh is a king", i);
}



const year = [2001, 2002, 2003];
const age = [];

for (let i = 0; i < year.length; i++) {
    age.push(2035 - year[i]);
};

console.log(age);



let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}

















