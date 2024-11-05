class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to compare ages
    compareAge(otherPerson) {
        // Berke: Implement the case for me older than person
        if (this.age > otherPerson.age) {
            return `${otherPerson.name} is younger than me.`;
        } else if (this.age == otherPerson.age){
            return `${otherPerson.name} is the same age as me.`;
        }
        // Elvin: Implement the case for me younger than person
        // Sabina: Implement the case for same age
    }
}

// Example usage:
const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2)); // Expected: "Joel is older than me."
console.log(p2.compareAge(p1)); // Expected: "Samuel is younger than me."
console.log(p1.compareAge(p3)); // Expected: "Lily is the same age as me."


