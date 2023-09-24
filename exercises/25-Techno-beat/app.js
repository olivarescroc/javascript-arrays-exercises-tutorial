// Add your code here
function lyricsGenerator(arr) {
    let result = ''; 
    let consecutiveOnes = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            consecutiveOnes++; 
            result += 'Drop the base ';
            
            if (consecutiveOnes === 3) {
                result += '!!!Break the base!!! ';
                consecutiveOnes = 0; 
            }
        } else {
            result += 'Boom ';
            consecutiveOnes = 0; 
        }
    }
    return result.trim(); 
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))