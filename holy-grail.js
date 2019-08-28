const readline = require('readline');
const typewriter = require('./typewriter');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const arrayOfQuestions = [
  "What... is your favorite color?\n", 
  "What... is the capital of Assyria?\n", 
  "What... is the air-speed velocity of an unladen swallow?\n"
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

rl.question(typewriter("*******************\nThe Bridge of Death\n*******************\nBRIDGEKEEPER: Stop! Who would cross the Bridge of Death must answer me these questions three, ere the other side he see.\n\nContinue?\n\nPress any key"), (answer1_0) => {

  rl.question(typewriter("\nWhat... is your name?\n"), (answer1) => {

  rl.question(typewriter("\nWhat... is your quest?\nTo "), (answer2) => {
  
    rl.question(`${typewriter(question3)}\n`, (answer3) => {
      if (question3 === arrayOfQuestions[0]) {
        console.log(typewriter("Right. Off you go.\n"));
      
      } else if (question3 === arrayOfQuestions[1]) {
        if (answer3.toLowerCase() === "assur") {
          console.log(typewriter("Right. Off you go.\n"));
        } else {
          console.log(typewriter("You are cast into the Gorge of Eternal Peril.\n"));
        }
      
      } else {
        let isFound = false;
        for (answ of index0Answers) {
          if (isFound !== true) {
            if (answer3.toLowerCase() === answ) {
              console.log(typewriter("Huh? I-- I don't know that. Auuuuuuuugh!\n"));
              isFound = true;
            }
          }
        }
        if (isFound === false) {
          console.log(typewriter("You are cast into the Gorge of Eternal Peril.\n"));
        }
      };
      
      rl.close();
    });
  });
});
});