
// let Data = {
//     FirstName: "sajid",
//     LastName: "Mulani",
//     city:"satara",
//     id:123,
//     school:"BVM"
// };
// console.log(Data);

// console.log(Object.keys(Data));

// console.log(Object.entries(Data));

// CheckKey = Data.hasOwnProperty("city");     // existing key
// console.log(CheckKey);

// CheckKey = Data.hasOwnProperty("mail");     // Non-existing key
// console.log(CheckKey);

// spread operator ////////////////////////////////////////

// let city = ['satara', 'Pune' ,'Kolhapur' , 'Mumbai' ];

// let moreCities = [ 'Aurangabad' , 'Sangli','Kolkata'];

// let combination = [ ...city , ...moreCities];

// console.log(combination);

/////////// avoid changing of base object ///////////////////// 

// let object ={  name: 'sajid',
//                city:'satara',
//                id:1334335};


// console.log(object);

// object.name= 'suraj';
// console.log(object);

// object1 = object;
// // object1.name= 'abhi';
// // console.log(object);

// object2 = { ...object};
// object2.name= 'suraj';
// console.log(object);


// Creating Instance of object //////////////////////////////////////////////////////////////////////////

// let employee=new Object();  
// employee.id=123;  
// employee.name="Sajid Mulani";  
// employee.salary=25000;  
// console.log(employee);

// // add new key ,value to object
// employee.address = "pune";
// console.log(employee);