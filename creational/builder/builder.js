class Person {
  constructor(builder) {
    this.firstName = builder.firstName;
    this.middleName = builder.middleName;
    this.lastName = builder.lastName;
    this.age = builder.age;
    this.fathersName = builder.fathersName;
    this.mothersName = builder.mothersName;
    this.height = builder.height;
    this.weight = builder.weight;
  }
}

class PersonBuilder {
  setFirstName(firstName) {
    this.firstName = firstName;
    return this;
  }

  setMiddleName(middleName) {
    this.middleName = middleName;
    return this;
  }

  setLastName(lastName) {
    this.lastName = lastName;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setFathersName(fathersName) {
    this.fathersName = fathersName;
    return this;
  }

  setMothersName(mothersName) {
    this.mothersName = mothersName;
    return this;
  }

  setHeight(height) {
    this.height = height;
    return this;
  }

  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  build() {
    return new Person(this);
  }
}

// Creating Person with desired arguments
const Person1 = new PersonBuilder()
  .setFirstName("Nicola")
  .setLastName("Tesla")
  .build();
console.log(Person1.firstName);
