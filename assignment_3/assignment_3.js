/*
Explain what is prototype and what is prototype chain in your own words

Prototype is a mechanism where Javascript objects inherit features and methods from one another. Prototype is essential to Javascript' OOP features.
Prototype chain is a process chained to the object. If the program execute a property variable or a method in an object, it would first look for it in the object. 
If nothing is found, then the program will follow the prototype chain to search further in the object's prototype until the property variable or method is found. 

 */
const arr = [1, 2, 3, 4, 5];

console.log("-------------------------- myMap --------------------------");
/*
The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
*/


Array.prototype.myMap = function(callback, thisArg) {
    //make sure the context is correct
    const context = thisArg || this;

    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback.call(context, this[i], i, this));
    }
    return result;
}

function sqNum(num){
    return num * num;
}

function double(num){
    return num * 2;
}

const sqrArr = arr.myMap(sqNum);
console.log("sqrArr: ", sqrArr);
console.log("arr: ", arr);

const doubledArr = arr.myMap(double);
console.log("doubledArr: ", doubledArr);
console.log("arr: ", arr);

console.log("-------------------------- myMap --------------------------");

console.log("-------------------------- myFilter --------------------------");

Array.prototype.myFilter = function(callback, thisArg) {
    //make sure the context is correct
    const context = thisArg || this;

    let result = [];
    for (let i = 0; i < this.length; i++) {
        if(callback.call(context, this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

//function isOdd
function isOdd(num){
    return num % 2 !== 0;
}

function divisibleByThree(num){
    return num % 3 === 0;
}

const filterOddNum = arr.myFilter(isOdd);
console.log("filterOddNum: ", filterOddNum);
console.log("arr: ", arr);

const dThreeArr = arr.myFilter(divisibleByThree);
console.log("dThreeArr: ", dThreeArr);
console.log("arr: ", arr);


console.log("-------------------------- myFilter --------------------------");

console.log("-------------------------- myReduce --------------------------");


Array.prototype.myReduce = function(callback, iniValue){
    //check if the array is empty and the iniValue is not provided
    if(this.length === 0 && iniValue === undefined){
        return
    }
    let accumulator, startValue;
    //Initialize accumulator and startIndex
    if(iniValue !== undefined){
        accumulator = iniValue;
        startIndex = 0;
    }
    else{
        accumulator = this[0];
        startIndex = 0;
    }

    //Iterate thru each element in the array
    for(let i = startIndex; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

function sum(accumulator, currValue){
    return accumulator + currValue;
}

const totalSumOfArr = arr.myReduce(sum, 0);
console.log("totalSumOfArr: ", totalSumOfArr);
console.log("arr: ", arr);

const arr2 = [0,1,2,3,4,5,6,7,8,9];
const totalSumOfArr2 = arr2.myReduce(sum, 10);
console.log("totalSumOfArr2: ", totalSumOfArr2);

console.log("-------------------------- myReduce --------------------------");
console.log("-------------------------- myIncludes --------------------------");

Array.prototype.myIncludes = function(element, fromIndex){
    //take care of the start index
    if(startIndex !== undefined){
        startIndex = fromIndex;
    }
    else{
        startIndex = 0;
    }

    if(startIndex < 0){
        startIndex = Math.max(startIndex + this.length, 0);
    }

    for(let i = startIndex; i < this.length; i++){
        //if the current element equals to the target element
        if(this[i] === element){
            return true;
        }
    }
    return false;
}

console.log(arr.myIncludes(3, 0));
console.log(arr.myIncludes(3, -2));
console.log("-------------------------- myIncludes --------------------------");
console.log("-------------------------- mySlice --------------------------");

Array.prototype.mySlice = function(startIndex, endIndex){
    if(startIndex !== undefined ){
        startIndex = startIndex;
    }
    else{
        startIndex = 0;
    }
    if(endIndex !== undefined){
        endIndex = endIndex;
    }
    else{
        endIndex = this.length;
    }
    //if startIndex is negative
    if(startIndex < 0){
        if(startIndex < -this.length){
            startIndex = 0;
        }
        startIndex = this.length + startIndex;
    }

    if(endIndex < 0){
        endIndex = this.length + endIndex;
    }
    
    let res = [];
    for(let i = startIndex; i < endIndex && i < this.length; i++){
        res.push(this[i]);
    }

    return res;
}

const slicedArr = arr.mySlice(3, 5);
console.log("slicedArr: ", slicedArr);
console.log("arr: ", arr);
console.log("-------------------------- mySlice --------------------------");
console.log("-------------------------- mySort --------------------------");
Array.prototype.mySort = function(compareFunction){
    //Default compare function if there is nothing provide
    compareFunction = compareFunction || function(a,b){
        if(a < b){
            return -1;
        }
        if(a > b){
            return 1;
        }
    };
    
    //Quick sort method
    const quickSort = (arr, left, right) =>{
        if(left < right){
            const pivotIndex = partition(arr, left, right);
            quickSort(arr, left, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, right);
        }
    }
    const partition = (arr, left, right) =>{
        const pivot = arr[right];
        let i = left - 1;

        for(let j = left; j < right; j++){
            if(compareFunction(arr, pivot) < 0){
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
        return i + 1;
    }
    
    quickSort(this, 0, this.length - 1);

    return this;
}
const arrMess = [10, 8, 2, 4, 5, 11, 29, 5, 20]
const sortedArr = arrMess.mySort();
console.log("sortedArr: ", sortedArr);
console.log("arrMess: ",arrMess )
