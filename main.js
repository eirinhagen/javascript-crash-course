// objects

const person = {
    firstName : "Eirin",
    age: 25,
    face: {
        nose:1,
        eyes:2
    }
};

console.log(person.age) // access as properties

const {firstName,age,face:{nose}} = person;
console.log(nose) //destructuring

person.email = "eirinhagenn@gmail.com"
console.log(person)

