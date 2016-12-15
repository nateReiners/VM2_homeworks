const readline = require('readline')

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {

  reader.question("Do you want tea?", function(answer1) {
    console.log(`you replied ${answer1}`)
    reader.question("Do you want biscuits?", function(answer2) {
      console.log(`you replied ${answer2}`)
      const tea = answer1
      const biscuit = answer2

      console.log(`you said ${tea} to tea and ${biscuit} to biscuits.`)
    });
  });

}

// teaAndBiscuits();
