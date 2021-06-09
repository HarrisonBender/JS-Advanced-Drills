name = "Harrison Bender";
var name 
console.log(name);

setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}

console.log('text created with JS!');
let avg = findAvg(2, 2);
console.log('text created with JS!', avg);
function findAvg(a, b) {
    console.log('text created with JS!');
    var answer = (a + b) / 2;
    return answer;
}

let fruits = ['peach', 'pineapple', 'orange'];
let favFruit;

function printFruits() {
    let favFruit = fruits[0];
    console.log(fruits[0]);

    printFavFruit();
    function printFavFruit() {
        console.log(favFruit);
        let leastFav = "prune";
        console.log(leastFav);
    }
  
}   

printFruits();

someFunc();
function someFunc() {
    console.log("Hello Harrison")
}

let anotherFunc = function () {
    alert("This is an alert message created by JS")
}
anotherFunc();