const person = {
  firstName: "Ivan",
  lastName: "Ivanov",
  sayHi() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};

// Другие способы создания объекта person
/* Через конструктор Object
const person = new Object();
person.firstName = "Ivan";
person.lastName = "Ivanov";
person.sayHi = function () {
  console.log(`Hello, ${this.firstName} ${this.lastName}`);
};
*/

/* Через статический метод Object.create
const person = Object.create(
  {},
  {
    firstName: { value: "Ivan", enumerable: true, writable: true },
    lastName: { value: "Ivanov", enumerable: true, writable: true },
    sayHi: {
      value: function () {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
      },
      enumerable: true,
      writable: true,
    },
  }
); */

// Создание объекта-наследника через метод Object.setPrototypeOf
const person2 = {};
Object.setPrototypeOf(person2, person);

/* Создание объекта-наследника через метод Object.create
const person2 = Object.create(person); */
