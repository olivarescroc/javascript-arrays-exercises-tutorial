let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let types = [];
for (let element of mix){
    types.push(typeof element);

}
console.log(types);