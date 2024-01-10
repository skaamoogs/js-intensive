function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHi = function () {
    console.log(`Hello, ${firstName} ${lastName}`);
  };
}

const person = new Person("Ivan", "Ivanov");

const Person = {
  firstName: "Ivan",
  lastName: "Ivanov",
  sayHi() {
    console.log(`Hello, ${firstName} ${lastName}`);
  },
};

console.log(person);
