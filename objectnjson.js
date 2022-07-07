// CRUD our Objects

let person = {name:'Ram', jobTitle:'FullstackDeveloper', email: 'almabetter@gmail.com', isVerified:false};
console.log(person.name);
console.log(person.isVerified);
person.isVerified=true;
delete person.name;
person.firstName = 'Ram';
person.lastName = 'Charan';
console.log(person);


// Updating Nested Objects

const userDetails = { name: { first: "Kapil", last: "Sharma", }, jobTitle: "Comedian", email: { work: "kapil@google.com", personal: "", }, status: { isOnline: true, isVerified: false, } }
userDetails.name = {first: 'John', last: 'Snow'};
userDetails.isProMember = false;
console.log(userDetails);

// Destructuring Syntax


const userActivity3 = { name: "Rohit", jobTitle: "Cricketer", work: "rahul@cricket.com", region: "Mumbai"}
const { name, jobTitle, work } = userActivity3;
console.log(name, jobTitle, work);
