/*
Question 1. Why are closures useful in JavaScript? Give an example use case.
Closures are useful in javascript in many ways. 
First, closures allow functions to access variables from an outer function's scope.
Second, closures enable 
Third, closures are useful in asynchronous operation
 */

//closure example for creating 
function animalAction(){
    let energy = 100;
    let emo = 100;
    return{
        feed: function(){
            energy += 50;
            emo += 50;
            this.showStat();
            // console.log("Your pet's energy is: ", energy);
            // console.log("Your pet's emotional health is: ", emo);
        },
        exercise: function(){
            energy -= 20;
            emo += 50;
            this.showStat();
            // console.log("Your pet's energy is: ", energy);
            // console.log("Your pet's emotional health is: ", emo);

        },
        showStat: function(){
            console.log("Your pet's energy is: ", energy);
            console.log("Your pet's emotional health is: ", emo);
        }
    }
}
const petDog = animalAction();
petDog.feed();
petDog.exercise();

/*
Question 2: When should you choose to use “let” or “const”
Because let and const cannot be redeclared, they are restricted to their function block, and they cannot be hoisted, let and const are more commonly used.

 */

/*
Question 3: Give an example of a common mistake related to hoisting and explain how to fix it.
 */

//Example of hoisting
var x; //x is hoisted
console.log("x: ", x);// x is undefined
x = 10;
console.log("x: ", x);

/*
Question 4:
 */

const arr = [1, 2];
function foo1(arg) {
  arg.push(3);
}
foo1(arr);
// console.log(arr);//[1,2,3]

function foo2(arg) {
  arg = [1, 2, 3, 4];
}
foo2(arr);
// console.log(arr);//[1,2,3]
//arr has became [1,2,3]
function foo3(arg) {
  let b = arg;
  b.push(3);
}
foo3(arr);
console.log(arr);//[1,2,3,3]

function foo4(arg) {
  let b = arg;
  b = [1, 2, 3, 4];
}
foo4(arr);
console.log(arr);//[1,2,3,3]