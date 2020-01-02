package creational.builder;

public class Person {
    private String firstName;
    private String middleName;
    private String lastName;
    private int age;
    private String fathersName;
    private String mothersName;
    private double height;
    private double weight;

    public static class Builder {
        private Person person;

        public Builder() {
            person = new Person();
        }

        public Builder setFirstName(String firstName) {
            this.person.firstName = firstName;
            return this;
        }

        public Builder setMiddleName(String middleName) {
            this.person.middleName = middleName;
            return this;
        }

        public Builder setLastName(String lastName) {
            this.person.lastName = lastName;
            return this;
        }

        public Builder setAge(Integer age) {
            this.person.age = age;
            return this;
        }

        public Builder setFathersName(String fathersName) {
            this.person.fathersName = fathersName;
            return this;
        }

        public Builder setMothersName(String mothersName) {
            this.person.mothersName = mothersName;
            return this;
        }

        public Builder setHeight(Double height) {
            this.person.height = height;
            return this;
        }

        public Builder setWeight(Double weight) {
            this.person.weight = weight;
            return this;
        }

        public Person build() {
            return this.person;
        }
    }

    public static void main(String[] args) {
        // Creating Person with desired arguments
        Person person1 = new Person.Builder().setFirstName("Nicola").setLastName("Tesla").build();
        System.out.println(person1.firstName);
    }
}