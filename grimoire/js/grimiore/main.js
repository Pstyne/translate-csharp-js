// Create all the necessary functions before calling them
// This use of JS leans more on the functional side of programming

// If we were using classes for the translations then it
// might not matter as much the order of functions
const createSpell = ({ name, isEvil, energyRequired }) => {
  return { name, isEvil, energyRequired };
}

const createSpellBook = ( title, spells ) => {
  return { title, spells };
}

const displaySpellBook = book => {
  console.log(book.title);
  for (const spell of book.spells) {
    console.log(`  ${spell.name}`);
  }
}

const getAllSpells = () => {
  const allSpells = [
    createSpell({
      name: "Turn enemy into a newt",
      isEvil: true,
      energyRequired: 5.1
    }),
    createSpell({
      name: "Conjure some gold for a local charity",
      isEvil: false,
      energyRequired: 2.99
    }),
    createSpell({
      name: "Give a deaf person the ability to heal",
      isEvil: false,
      energyRequired: 12.2
    }),
    createSpell({
      name: "Make yourself emperor of the universe",
      isEvil: true,
      energyRequired: 100.0
    }),
    createSpell({
      name: "Convince your relatives your political views are correct",
      isEvil: false,
      energyRequired: 2921.5
    }),
  ];
  
  return allSpells;
}

const makeEvilSpellBook = spells => {
  const evilBook = createSpellBook();
  evilBook.title = "Evil Book";
  evilBook.spells = spells.filter(spell => spell.isEvil);

  return evilBook;
}

const makeGoodSpellBook = spells => {
  const goodBook = createSpellBook();
  goodBook.title = "Good Book";
  goodBook.spells = spells.filter(spell => !spell.isEvil);

  return goodBook;
}

const allSpells = getAllSpells();
const evilBook = makeEvilSpellBook(allSpells);
const goodBook = makeGoodSpellBook(allSpells);

console.log("Do you believe in magic?");
console.log("------------------------");

displaySpellBook(evilBook);
console.log('\n');
displaySpellBook(goodBook);