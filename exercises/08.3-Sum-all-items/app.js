function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for (let number of theArray){
		total += number;
	}

	return total;
}

console.log(sumTheElements([2,13,34,5]));