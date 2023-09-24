let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here



for(let i = 0; i < par.length; i++) {
    let letter = par[i].toLowerCase(); // Convert the letter to lowercase
    if(letter !== ' ') { // Check if the letter is not a whitespace
        if(counts[letter]) { // If the letter exists in the counts object, increment its value
            counts[letter]++;
        } else { // If the letter doesn't exist in the counts object, initialize it with a value of 1
            counts[letter] = 1;
        }
    }
}

console.log(counts);