                    //   Task 1 Object Creation

// Create an empty object and assign it to a variable.

// let objectname = {}

// Create an object with properties for name, age, and profession.
// let student = {
//     name: "Ahmad Raza",
//     age: 19,
//     profession: "Student",
// };


                        //    Task 2 Object Properties
 // Access and print the values of properties from an object.
  
// console.log(student.name);
// console.log(student.age);
// console.log(student.profession);

// Modify the value of a property in an object.

// let student = {
//     name: "Ahmad Raza",
//     age: 19,
//     profession: "Student",
// };
// student.age = 21;
// console.log(student.age);

// Add a new property to an existing object.

// student.id = 102;
// console.log(student)

                            // Task 3: Object Methods
// Create an object method that prints a message to the console.
// let student = {
//     name: "Ahmad Raza",
//     age: 19,
//     profession: "Student",
//     message : function(){
//         console.log("MY name is " + this.name);
//         }
// };
// student.message();

// Create a method that calculates and returns a value based on object properties.
// let student = {
//         name: "Ahmad Raza",
//         age: 19,
//         profession: "Student",
//         calculate : function(){
//           let  n1=10;
//            let  n2=20;
//            return n1 + n2;
//         }
//  };
//  console.log(student.calculate());

                                       // Task 4: Object Iteration
//  Iterate over the properties of an object and print their values.
// for(let property in student) {
// 	console.log(property + ": " + student[property]);
// }
 
                                          // Task 5: Object Comparison
// Compare two objects to check if they have the same properties and values.
// let student1 = {
//     name :  "Ahmad Raza",
//      age: 19,
//     profession: "Student",
// };
 
// let student2 = {
//     name :  "Ahmad Raza",
//      age: 19,
//     profession: "Student",
// }

// console.log(student1===student2)

// Compare two objects to check if they refer to the same object in memory.
// console.log(student1=== student2);

                    // Task 6: Object Nest
                
// Create an object that contains another object as one of its properties.
// let student1 = {
//         name :  "Ahmad Raza",
//          age: 19,
//         profession: "Student",
//         address : {
//             street : "Street 1",
//             city : "FSD",
//     }
// };

// // Access and modify properties of a nested object.
// student1.address.city = 'Multan';
// console.log(student1.address.city)


// Task 7: Object Prototypes
// Create a prototype object and use it to create multiple instances of objects.
// let personPrototype = {
// 	sayHello: function() {
// 		console.log('Hello World!');
// 	}
// };

// Add a method to the prototype object and observe its effect on the instances.

// let person1 = Object.create(personPrototype);
// let person2 = Object.create(personPrototype);

// person1.sayHello();
// person2.sayHello();

                              // Task 8: Object Serialization
// Convert an object to a JSON string using JSON.stringify().
// let student1 = {
//         name :  "Ahmad Raza",
//          age: 19,
//         profession: "Student",
//     };

// let jsonString = JSON.stringify(student1);
// console.log(jsonString);

// // Parse a JSON string and convert it back to an object using JSON.parse().
// let parsedObject = JSON.parse(jsonString);
// console.log(parsedObject.name);

                            //  Task 9: Object Destructuring
//  Use object destructuring to extract specific properties from an object.
// let student1 = {
//             name :  "Ahmad Raza",
//              age: 19,
//             profession: "Student",
//         };
// let {name, age} = student1;
// console.log(name); 
// console.log(age);


                                 // Task 10: Object Property Enumeration
// Use Object.keys() to get an array of all the property names of an object.

// let student1 = {
//             name :  "Ahmad Raza",
//              age: 19,
//             profession: "Student",
//         };


// let properties = Object.keys(student1);
// console.log(properties);


//                           // Task 11: Object Inheritance
// // Create a parent object and a child object that inherits properties and methods from the parent.

// let parentObject = {
// 	sayHello: function() {
// 		console.log('Hello World!');
// 	}
// };
// let childObject = Object.create(parentObject);
// childObject.sayHello();

                           // Task 12: Object Privacy
// Create private properties in an object using closures or symbols.
// let person = (function() {
// 	let privateName = 'Ahmad';
// 	return {
// 		getName: function() {
// 			return privateName;
// 		}
// 	};
// })();

// console.log(person.getName()); 
 
 