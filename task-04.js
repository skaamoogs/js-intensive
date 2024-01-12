class Person {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

class PersonTwo extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
