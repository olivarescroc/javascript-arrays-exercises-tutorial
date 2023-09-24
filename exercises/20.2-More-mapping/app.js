let myNumbers = [23,234,345,4356234,243,43,56,2];

// Your code here
let newArray = [];
let myFunction = function (input){
    return input * 3;
}
newArray = myNumbers.map(myFunction);
console.log(newArray);
