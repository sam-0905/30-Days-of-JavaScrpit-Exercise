/*
Exercises: Level 1
1.Create an empty object called dog/
2.Print the the dog object on the console.
3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof.
4.Get name, legs, color, age and bark value from the dog object.
5.Set new properties the dog object: breed, getDogInfo.
**/

const dog = {};
dog.name = "Oscar";
dog.legs = "Four";
dog.color = "Golden";
dog.age = 2;
dog.bark = "yes";
dog.breed = "Golden retrevier";

console.log(dog);

const dog2 = {
    name: "ceasear",
    legs: "Fur",
    color: "Black with White",
    age: 10,
    bark: "yes",
};

console.log(dog2);

//?Find the person who has many skills in the users object.

//?Count logged in users, count users having greater than equal to 50 points from the following object

const users = {
    Alex: {
        email: "alex@alex.com",
        skills: ["HTML", "CSS", "JavaScript"],
        age: 20,
        isLoggedIn: false,
        points: 30,
    },
    Asab: {
        email: "asab@asab.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 25,
        isLoggedIn: false,
        points: 50,
    },
    Brook: {
        email: "daniel@daniel.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        age: 30,
        isLoggedIn: true,
        points: 50,
    },
    Daniel: {
        email: "daniel@alex.com",
        skills: ["HTML", "CSS", "JavaScript", "Python"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    John: {
        email: "john@john.com",
        skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
        age: 20,
        isLoggedIn: true,
        points: 50,
    },
    Thomas: {
        email: "thomas@thomas.com",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
    Paul: {
        email: "paul@paul.com",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node",
        ],
        age: 20,
        isLoggedIn: false,
        points: 40,
    },
};
const copyUser = object.assign({}, users);
console.log(copyUser);