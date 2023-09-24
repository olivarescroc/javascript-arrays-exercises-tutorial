// Code goes here

function matrixBuilder(n) {
    let matrix = [];
    
    for(let i = 0; i < n; i++) {
        let row = [];
        for(let j = 0; j < n; j++) {
            row.push(Math.round(Math.random())); // Esto generará 0 o 1 aleatoriamente
        }
        matrix.push(row);
    }
    
    return matrix;
}

// do not change anything from this line down
console.log(matrixBuilder(5))