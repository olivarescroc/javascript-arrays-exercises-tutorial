let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here

let wArray = theBools.map(function (element){
    if (element === 1){
        return 'wiki';
    }
    else if (element === 0){
        return 'woko';
    }

})

console.log(wArray);