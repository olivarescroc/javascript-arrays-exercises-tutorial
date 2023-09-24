let arr = [4,5,734,43,45];

//*****************
// Your code here
// you need to loop 10 times, for example, using a for loop
//*****************
for (let x=0; x<10; x++){
    let number = Math.floor(Math.random() * 1000) + 1;
    arr.push(number);
}
console.log(arr);