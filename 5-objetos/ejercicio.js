
var  student = {
        name: "David Rayy",
        class: "VI",
        rollno: 12
    }


console.log(Object.keys(student))


for (const property in student) {
    console.log(`${property}: ${student[property]}`);
  }


   console.log ( Object.getOwnPropertyNames(student))




  console.log(listAllProperties(student))

