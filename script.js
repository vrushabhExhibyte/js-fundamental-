// var array = [5, 2, 1, 8, 2, 3, 4, 5, 8, 4];
// var counts = {};

// const chunk = array.length / 2;
// const a1 = [];
// const a2 = [];

// console.log(splitIntoChunk(array, chunk));
// console.log(a1, a2);

// function splitIntoChunk(arr, chunk) {


//     for (var i = 0; i < arr.length; i++) {
//         var num = arr[i];
//         counts[num] = counts[num] ? counts[num] + 1 : 1;
//         if (counts[num] > 2) {
//             return [];

//         }
//     }

//     for (i = 0; i < arr.length; i++) {


//         if (!a1.includes(arr[i]) && a1.length < chunk) {
//             a1.push(arr[i]);
//         }
//         else if (!a2.includes(arr[i])) {
//             a2.push(arr[i]);
//         }
//         else {
//             console.log(a1.length == 0);
//             console.log(a2.length == 0);

//         }

//     }
// };
// console.log(first, vrushabh);

// const vArray = array / 2;
// const a1 = [];
// const a2 = [];
// function splitIntoChunk(arr, vArray) {

//     for (i = array; i < arr.length; i += vArray) {

//         if (!a1.includes(array[i])) {
//             a1.push(array[i]);

//         }
//         if (!a2.includes(array[i])) {
//             a2.push(array[i]);
//         }
//         console.log(a1, a2);

//     }
// }

// splitIntoChunk(array, vArray);


// var name = 'rahul';
// const vrushabh = {

//     name: 'vrushabh1',
//     year: 2021,const arr = [2, 1, 2, 3, 3, 4, 2];
// function find_duplicate_in_array(array) {
//     let count = {}
//     const result = []

//     array.forEach(item => {
//         if (count[item]) {
//             count[item] += 1;
//         }
//         count[item] = 1
//     })

//     console.log(count);
//     // {1: 1, 2: 3, 3: 2, 4: 1}

//     for (let key in count) {
//         if ( >= 2) {
//             return [];
//         }

//     }

//     return result;

// }

// console.log(`ans = ${find_duplicate_in_array(arr)}`);
// function find_duplicate_in_array(array) {
//     let count = {}
//     const result = []

//     array.forEach(item => {
//         if (count[item]) {
//             count[item] += 1;
//         }
//         count[item] = 1
//     })

//     console.log(count);
//     // {1: 1, 2: 3, 3: 2, 4: 1}

//     for (let key in count) {
//         if ( >= 2) {
//             return [];
//         }

//     }

//     return result;

// }

// console.log(`ans = ${find_duplicate_in_array(arr)}`);
//         console.log('heyy ${this.name}');
//     }

// };
// vrushabh.jkl();

// const rahul = {

//     year: 2025,

// };

// rahul.calAge = vrushabh.calAge;
// rahul.calAge();


// vrushabh.calAge();


// const vrushabh = birthYear => {

//     console.log(2021 - birthYear);

// };
// vrushabh(2001);



// let age = 20;
// let oldAge = age;
// age = 21;
// console.log(age);
// console.log(oldAge);


// const me = {

//     name: 'rahul',
//     age: 30
// };

// const friends = me;
// friends.age = 27;

// console.log('friend', friends);
// console.log('me', me);

// const asd = Object.assign({}, me);
// asd.age = 10;
// console.log(asd);
// console.log(me);


// const [first, , vrushabh,] = restaurant.categories;
// console.log(first, vrushabh);

// const str = 'vrushabh';
// const newStr = [...str];
// console.log(newStr);
// console.log(...str);


// const [pizza, pasta, ...othersFood] = [

//     ...restaurant.mainMenu,
//     ...restaurant.starterMenu,
// ];

// console.log(pizza, pasta, othersFood);

// const add = function (...numbers) {
//     // console.log(numbers);
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++)
//         sum += numbers[i];
//     console.log(sum);

// };
// add(2, 3);
// add(4, 8, 3, 9);
// add(1, 5, 6, 8, 5, 4);


// const { odds: { team1, x, team2 } } = game;
// console.log(team1, x, team2);

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu.entries()) {
//     console.log(`${item[0] + 1} = ${item[1]}`);

// }

// const game = {
//     team1: 'Cristiano Ronaldo',
//     team2: 'Lionel Messi',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Burki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze',
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };
// array1 = [1, 2, 3, 4, 1, 2, 3, 5];
// const game = new Set(['vrushabh', 'tarang']).size
// console.log(game);

// const rest = new Map();
// console.log(rest.set(1, 'vrushabh,tarang'));

// const task = new Map([

//     ['task', 'code'],
//     ['date', 'today'],
//     ['repeat', true],
// ])

// console.log(task);

// const gameEvents = new Map([
//     [17, ' GOAL'],
//     [36, ' Substitution'],
//     [47, ' GOAL'],
//     [61, ' Substitution'],
//     [64, ' Yellow card'],
//     [69, ' Red card'],
//     [70, ' Substitution'],
//     [72, ' Substitution'],
//     [76, ' GOAL'],
//     [80, ' GOAL'],
//     [92, ' Yellow card'],
// ]);

// const time = [...gameEvents.values()];
// console.log(time);


// const z1 = 'vrushabh is a king';
// console.log(z1.indexOf('king'));
// console.log(z1.slice(0, z1.indexOf(' '))); //=> vrushabh
// console.log(z1.slice(4)); //=> habh is a king
// console.log(z1.slice(-4)); //=> king

// const z1 = 'vrushabh is a king';
// console.log(z1.split(' ')); //=> ["vrushabh", "is", "a", "king"]
// console.log(z1.split('is')); //=>  ["vrushabh ", " a king"]

// const z2 = z1.toLowerCase();
// const z3 = z2[0].toUpperCase()  ;
// console.log(z3);

// const q1 = 'king is a fearless to fearless';
// console.log(q1.replaceAll('fearless', 'boss'));

// const [firstName, lastName] = 'vrushabh vasoya'.split(' ');
// console.log(firstName, lastName);
// const name1 = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(name1);

// const z1 = '97669872187547';
// console.log(z1.padStart(z1.length, '+'));

