readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.cyanBright.bold("Welcome to Game Quiz!"))

var score = 0;

var highscores = [
  {
    name: "Jowel",
    score: 4
  },
  {
    name : "Chandan",
    score : 3
  }
]

const game = () =>{

    var userName = readlineSync.question(chalk.whiteBright.bold(`Whats your name? 
`));

    console.log("Welcome "+ userName+ "! Are you a fan of Mobile Legend? Let's find out!")

    console.log(chalk.cyanBright.bold("Note: Answer with typing only options, eg: a or b"))

    const play = (question, answer) =>{
        var userAnswer = readlineSync.question(question)
          if(userAnswer.toLowerCase() === answer.toLowerCase()){
            console.log('Right!')
            score = score + 1; 
          }else{
            console.log('Wrong!')
          }
          console.log("Score : "+ score)
          console.log('--------------')
    }

    var questions = [{
      question: `What type of game is Mobile Legend? 
      a : MOBA
      b : RPG
      c : RACING

      `,
      answer:"a"
    }, {
      question: `Which company does Mobile Legend belong to? 
      a : Tencent
      b : Montoon
      c : Valve

      `,
      answer:"b"
    }, {
      question: `What is the team composition in this game? 
      a : 2v2
      b : 5v5
      c : 4v4

      `,
      answer:"b"
    },
    {
      question: `Which is the first hero do you get?
      a : Alucard
      b : Eudora
      c : Layla

      `,
      answer:"c"
    },
    {
      question: `Who is odette's boyfriend?
      a : Lancelot
      b : Alucard
      c : Gusion

      `,
      answer:"a"
    },
    {
      question: `The land of the _____!
      a : Abyss
      b : Dark
      c : Dawn

      `,
      answer:"c"
    }
    ]


    for(var i = 0; i<questions.length;i++){
      var currentQuestion = questions[i];
      play(currentQuestion.question, currentQuestion.answer)
    }

    var msg = '';
    switch(score){
      case 0 :
        msg = chalk.redBright.bold("You don't know about Mobile Legend!")
        break;
      case 1 :
        msg = chalk.yellowBright.bold("You rarely play Mobile Legend!")
        break;
      case 2 :
        msg = chalk.yellowBright.bold("You rarely play Mobile Legend!")
        break;
      case 3:
        msg = chalk.greenBright.bold("You play Mobile Legend often!")
        break;
      case 4:
        msg = chalk.greenBright.bold("You are a true Mobile Legend Player!")
        break;
    }

    console.log('Your total score is '+ score)
    console.log(msg)

    var isHighscore = true

    highscores.map(user=>{
      if( score < user.score || score == user.score){
          isHighscore = false
      }
    })

    if(isHighscore){
      console.log("Yay! You have a high score!")
    }else{
      console.log("You don't have a highscore!")
    }

    if (readlineSync.keyInYN('Do you want to play again?')) {
          score = 0
          console.clear()
          game()
    } else {
          console.log(chalk.cyanBright.bold('Thank you for playing!'))
    }
}

game()



