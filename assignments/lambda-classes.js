// CODE here for your Lambda Classes
class Person {
    constructor(parentAttributes) {
        this.name = parentAttributes.name;
        this.age = parentAttributes.name;
        this.location = parentAttributes.location;
        this.speak = function() {
            return `Hello my name is ${this.name}, I am from ${this.location}.`;
        }
    }
};
class Instructor extends Person {
    constructor(instructoratts) {
        super(instructoratts);
        this.specialty = instructoratts.specialty;
        this.favLanguage = instructoratts.favLanguage;
        this.catchPhrase = instructoratts.catchPhrase;
        this.demo = function(subject) {
            return `Today we are learning about ${this.subject}.`;
        }
        this.grade = function(student, subject) {
            return `${student.name} receives a perfect score on ${subject}.`;
        }
    }
};
class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
        this.listsSubjects = function() {
            for (let i = 0; i < this.favSubjects.length; i++) {
                console.log(this.favSubjects[i]);
            }
        }
        this.PRAssignment = function(subject) {
            return `${this.name} has submitted a PR for ${subject}.`;
        }
        this.sprintChallenge = function(subject) {
            return `${this.name} has begun sprint challenge on ${subject}.`;
        }
    }
}
class ProjectManager extends Instructor {
    constructor(manageratts) {
        super(manageratts);
        this.gradClassName = manageratts.gradClassName;
        this.debugsCode = function(student, subject) {
            return `${this.name} debugs ${student}'s code on ${subject}.`;
        }
    }
}
const david = new Student({
    previousBackground: "Medical Equipment",
    className: "WebPT10",
    favSubjects: ["Math", "Science", "Nutrition"],
});
console.log(david.previousBackground);
david.listsSubjects();