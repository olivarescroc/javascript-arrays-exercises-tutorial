let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];



let simplifier = function(person){
	let today = new Date();
	let age = today.getFullYear() - person.birthDate.getFullYear();
    let monthDifference = today.getMonth() - person.birthDate.getMonth();

    // Si el mes actual es anterior al mes de nacimiento o es el mismo mes pero el día actual aún no ha llegado al día de nacimiento.
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;  // Reduzca la edad en 1 porque la persona aún no ha tenido su cumpleaños este año.
    }

	return 'Hello, my name is ' + person.name + ' and I am '+ age + ' years old';
};

console.log(people.map(simplifier));