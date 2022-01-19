// JS is a dynamic language where specifying the data type
// is not necessary

const names = ["Nashville", "Hong Kong", "The back yard", 
"Earth", "London", "The mall", "Ryman Auditorium", 
"The Great Wall of China"];

// console.log to output to console in js
console.log("All Place Names");

// JS uses for as its primitive iteration function
for (const name of names) {
  console.log(name);
}

// What happens when you console.log without an argument?
// Didn't notice any output so using regex instead
console.log('\n');

// Filter the list to create a new list that only
// has place names that start with the word "The".
const theNames = names.filter(n => n.startsWith("The"));

console.log("'The' Place Names");
for (const name of theNames) {
  console.log(name);
}