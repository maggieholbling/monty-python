const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arrayOfQuestions = [
  "What... is your favorite color?", 
  "What... is the capital of Assyria?", 
  "What... is the air-speed velocity of an unladen swallow?"
]
const question3 = arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)];

const index0Answers = [
  "what do you mean? an african or european swallow?",
  "an african or european swallow?",
  "african or european swallow?", 
  "african or european swallow",
  "african or european",
  "african or european?"
]

rl.question("What... is your name?\n", (answer1) => {

  rl.question("What... is your quest?\nTo ", (answer2) => {
  
    rl.question(`${question3}\n`, (answer3) => {
      if (question3 === arrayOfQuestions[0]) {
        console.log("Right. Off you go.");
      
      } else if (question3 === arrayOfQuestions[1]) {
        if (answer3.toLowerCase() === "assur") {
          console.log("Right. Off you go.");
        } else {
          console.log("You are cast into the Gorge of Eternal Peril.");
        }
      
      } else {
        let isFound = false;
        for (answ of index0Answers) {
          if (isFound !== true) {
            if (answer3.toLowerCase() === answ) {
              console.log("Huh? I-- I don't know that. Auuuuuuuugh!")
              isFound = true;
            }
          }
        }
        if (isFound === false) {
          console.log("You are cast into the Gorge of Eternal Peril.")
        }
      };
      
      rl.close();
    });
  });
});