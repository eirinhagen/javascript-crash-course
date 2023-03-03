function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob)
}

const person1 = new Person("John", "Hagen","1-24-1992")

const person2 = new Person("Eirin","Hagen","2-13-1998")

 console.log(person2)
 