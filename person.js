/*const john = {
	name: 'John Doe',
	age: 30
}
*/

class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	
	greeting () {
	console.log(`My name is ${this.name} and I am ${this.age}`)
	}
}

//module.exports = john;
module.exports = Person;
