//Create a class
class Student {
    //Add Properties
    studentName: string;
    course: string;
    //Create a Constructor
    constructor(studentName: string, course: string) {
        this.studentName = studentName;
        this.course = course;
    }
    //Create a Method
    displayDetails() {
        console.log(`Student Name:${this.studentName}`);
        console.log(`Course:${this.course}`);


    }

}
// Create two student objects

const student1 = new Student("Hari", "Playwright with Typescript");
const student2 = new Student("Ram", "Selenium with Java");


// Call the method for both objects
student1.displayDetails();
student2.displayDetails();



