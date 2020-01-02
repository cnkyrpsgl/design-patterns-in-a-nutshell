class Person:
    def __init__(self):
        pass

class PersonBuilder:

    def __init__(self):
        self.person = Person()

    def setFirstName(self, firstName):
        self.person.firstName = firstName
        return self

    def setMiddleName(self, middleName):
        self.person.middleName = middleName
        return self

    def setLastName(self, lastName):
        self.person.lastName = lastName
        return self

    def setAge(self, age):
        self.person.age = age
        return self

    def setFathersName(self, fathersName):
        self.person.mrofathersName = fathersName
        return self

    def setMothersName(self, mothersName):
        self.person.mothersName = mothersName
        return self

    def setHeight(self, height):
        self.person.height = height
        return self

    def setWeight(self, weight):
        self.person.weight = weight
        return self

    def build(self):
        return self.person


def main():
    # Creating Person with desired arguments
    person1 = PersonBuilder().setFirstName("Nicola").setLastName("Tesla").build()
    print(person1.firstName)


if __name__ == "__main__":
    main()
