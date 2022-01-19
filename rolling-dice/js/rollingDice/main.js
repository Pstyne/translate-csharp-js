// This class is used to define a "die" object (a single "dice")
//  Each die will have a value. This value is the number that the
//  die "landed on" when it was rolled.
const createDie = (val) => {

  return {
    // A place to store the numeric "value" of a Die object
    value: val,

    // This method is automatically called when we create the "message" variable below
    // By the way, a C# object can have a toString() method too...
    toString: () => {
      let dieString = "";
      
      // Switch is very usable in JS
      switch (val) {
        case 1:
          dieString = "\u2680"; // These \uXXXX values are fancy unicode characters
          break;
        case 2:
          dieString = "\u2681";
          break;
        case 3:
          dieString = "\u2682";
          break;
        case 4:
          dieString = "\u2683";
          break;
        case 5:
          dieString = "\u2684";
          break;
        case 6:
          dieString = "\u2685";
          break;
      }
    
      return dieString;
    }
  }
}

// Function to "roll" a die
//  Generates a random number between 1 and 6
//  Constructs a new Die object with the random number as it's value
const Roll = () => {
  const dieValue = Math.ceil(Math.random() * 6);
  const die = createDie(dieValue);
  return die;
}

console.log("Let's roll some dice, baby!");
console.log("---------------------------");

// Seeing a familiar UNIVERSAL for loop on the c# side so
// thats nice :)
for (let i = 0; i < 10; i++) {
  const die1 = Roll();
  const die2 = Roll();

  let message = `${die1} + ${die2} == ${die1 + die2}`;
  if (die1.value === die2.value) {
    // I'm not doing all caps...
    message += " Doubles!";
  }

  console.log(message);
}