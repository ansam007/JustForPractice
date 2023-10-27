class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minAge) {
        return (minMarks) => {
            return this.age > minAge && this.marks > minMarks;
        };
    }
}

var obj = [
    new Student("aman", 21, 60),
    new Student("bajwa", 23, 70),
    new Student("Sia", 18, 90),
    new Student("raina", 24, 40),
]
const minMarks = 50;
const minAge = 19;

// var obj = new Student("aman", 21, 60);
// console.log(obj.setPlacementAge(minAge)(minMarks));

// const student = obj[0];
// const checkPlacementAge = student.setPlacementAge(minAge);
// console.log(checkPlacementAge(minMarks));

for (const student of obj) {
    const checkPlacementAge = student.setPlacementAge(minAge);
    console.log(`Name: ${student.name}, Placement Eligibility: ${checkPlacementAge(minMarks)}`);
}




