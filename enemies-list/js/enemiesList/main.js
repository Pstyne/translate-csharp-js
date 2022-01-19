console.log("My Enemies List!");
console.log("----------------");

// A function to make and return list of enemies
const getEnemies = () => {
  // Make a list of Enemy objects
  //  How would you create a collection of enemy objects in JavaScript?
  const enemies = [
    createEnemy({
      firstName: "Joshua",
      lastName: "Flowers",
      offenses: [
        "Being a jerk to me in elementary school",
        "Not being nice to me in elementary school"
      ],
      isReallyHated: true
    }),
    createEnemy({
      firstName: "Darth",
      lastName: "Vader",
      offenses: [
        "Cut off Luke's hand",
        "Murdered all those kids",
        "Unkind management practices"
      ],
      isReallyHated: false
    }),
    createEnemy({
      firstName: "Betty",
      lastName: "Rudelady",
      offenses: [
        "Phone calls in the theater",
        "Phone calls on the bus",
        "Phone calls in line at the grocery store",
        "Poor conversationalist"
      ],
      isReallyHated: true
    }),
    createEnemy({
      firstName: "Leon",
      lastName: "Pack",
      offenses: [
        "Keeps giving me a hotplate"
      ],
      isReallyHated: false
    }),
    createEnemy({
      firstName: "Tommy",
      lastName: "Spurlock",
      offenses: [
        "He's always trashing ketchup"
      ],
      isReallyHated: false
    }),
  ];

  return enemies;
}


// One way of creating an enemy in JS
// HAHA!
const createEnemy = ({ firstName, lastName, offenses, isReallyHated }) => {
  return {
    firstName,
    lastName,
    offenses,
    isReallyHated
  }
}


// Have to watch the placement of functions
const enemies = getEnemies();

for (const enemy of enemies) {
  if (enemy.isReallyHated) {
    console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`);
  } else {
    console.log(`${enemy.firstName} ${enemy.lastName}`);
  }
}