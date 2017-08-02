const assert = require('chai').assert;
const Dog = require('../app/dog.js').Dog;
const determineSound = require('../app/dog.js').determineSound;

let dog = new Dog("Rusty", 2, "Siberian Huskey")
let sounds = new determineSound("Brutus", 1.3, "Bulldog")

describe("Dog", () => {

	describe("Check if dog have a name", ()=>{
		it("should return dog name", function(){
			assert.equal(dog.getName(), "My name is Rusty");
		});
	});

	describe("Check if dog has age", ()=>{
		it("should return dog's age", function(){
			assert.equal(dog.getAge(), "I am 2 years old");
		});
	});

	describe("check if dog's has breed", ()=>{
		it("should return dog's breed", function(){
			assert.equal(dog.getBreed(), "I from the family of Siberian Huskey");
		});
	}); 


	describe("Check if dog has age", ()=>{
		it("should return dog's age", function(){
			assert.equal(sounds.makeSound(), "woof woof woof!!! my name is Brutus, am from the family of Bulldog and I am strong and heaalthy");
		});
	});
})