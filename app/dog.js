'use strict'

class Dog {
  //Assigning values through constructor
  constructor (name,age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  
  // This methods Below gets or access the values above in the case where it's private

  getName() {
    return "My name is " + this.name;
  }

  getAge() {
    return  "I am " + this.age + " years old";
  }

  getBreed() {
    return "I from the family of " + this.breed; 
  }

}

class determineSound extends Dog{
  constructor(name,age, breed){
    super(name,age, breed);
    
  }
  makeSound(){
    if(this.age < 1){
      return `woof!!! my name is ${this.name}, am from the family of ${this.breed} and my barking is not strong yet`
    }
    if(this.age > 1 && this.age < 1.5){
      return `woof woof woof!!! my name is ${this.name}, am from the family of ${this.breed} and I am strong and heaalthy`
    }
    if(this.age>1.5){
      return `woooooof!!! my name is ${this.name}, am from the family of ${this.breed} and I am getting old`
    }
  }
}
module.exports={
  Dog, determineSound
}