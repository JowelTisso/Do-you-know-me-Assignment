readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.cyanBright.bold("Welcome to Jowel's quiz on FRIENDS"))
console.log(' ')

var score = 0;
var userName = readlineSync.question(chalk.whiteBright.bold('Whats your name? '));

console.log("Welcome "+ userName+ "! Do you know Jowel? Let's find out!")

console.log(chalk.cyanBright.bold("Note: Answer with typing only options, eg: a or b"))

const play = (question, answer) =>{
var userAnswer = readlineSync.question(question)
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log('Right!')
    score = score + 1; 
  }else{
    console.log('Wrong!')
  }
  console.log('--------------')
}

var questions = [{
  question: `Where does Jowel live? 
  a : Guwahati
  b : Jorhat
  c : Silchar

  `,
  answer:"a"
}, {
  question: `What is Jowel's favourite fastfood? 
  a : Roll
  b : Momo
  c : Dosa

  `,
  answer:"b"
}, {
  question: `Which game does Jowel play most? 
  a : Pubg
  b : Mobile Legend
  c : Far cry

  `,
  answer:"b"
},
{
  question: `Which brand phone does Jowel have?
  a : Samsung
  b : Oppo
  c : Moto

  `,
  answer:"c"
},
]


for(var i = 0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log('Your total score is '+ score)
var msg = '';
switch(score){
  case 0 :
    msg = chalk.redBright.bold("You don't know Jowel!")
    break;
  case 1 :
    msg = chalk.yellowBright.bold("You barely know Jowel!")
    break;
  case 2 :
    msg = chalk.yellowBright.bold("You barely know Jowel!")
    break;
  case 3:
    msg = chalk.greenBright.bold("You are good friend with Jowel!")
    break;
  case 4:
    msg = chalk.greenBright.bold("You know Jowel like no one does!")
    break;
}

console.log(msg)
console.log(chalk.cyanBright.bold('Thank you for playing!'))

