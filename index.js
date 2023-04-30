var readlineSync = require("readline-sync");
console.log("Hello Guy's");
var user = readlineSync.question("What is Your Name :");
console.log("Welcome " + user + " to Do You Know Ahsan");
var userAsk = readlineSync.question("Please give the Reply : ");
var useranswer = "Yes"
var score = 0;

if (userAsk.toUpperCase() === useranswer.toUpperCase()) {
  console.log("Ok! Can I Ask Some Question " + user);
  var userAsks = readlineSync.question("Please give the Reply : ");
} else {
  console.log("You Selected Wrong Key!")
}
if (userAsks.toUpperCase() === useranswer.toUpperCase()) {
  console.log("Proceed Now ! ")
  var response = readlineSync.question("Write ENTER to start Question : ");
} else {
  console.log("You Selected Wrong Key!")
}


var questions = [{
  question: "What is My Favourite Colour? : ",
  answer: "Black"
},
{
  question: "Where Do I Like a long time stay in My Home District : ",
  answer: "Varanasi"
},
{
  question: "What is My Favourite Food? Veg or Nonveg : ",
  answer: "Veg"
},
{
  question: "What is My Favourite Place for Visit ? : ",
  answer: "Himachal Pradesh"
},
{
  question: "What is My Second Favourite Place for Religion Visit ? : ",
  answer: "Ajmer"
},
{
  question: "Currently Where Do I Live? : ",
  answer: "Mumbai"
},
{
  question: "Who is My Favourite Bollywood Actor? Hint:He is Died : ",
  answer: "Sushant Singh Rajput"
},
{
  question: "Who is She? Which Do I Love a lot ? : ",
  answer: "Grandmother"
},
{
  question: "Who is He? Which Do I Love a lot after My Grand Mother ? : ",
  answer: "Family"
}
];

function game(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Your Answer is Right!");
    score = score + 2;
  } else {
    console.log("Your Answer is Wrong!");
    score = score - 1;
  }
}
if (response == "ENTER") {
  console.log("Now You are Ready!");
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    game(currentQuestion.question, currentQuestion.answer);
    console.log("Right Answer is : " + currentQuestion.answer)
  }
} else {
  console.log("Your Choice is wrong !")
}

console.log("---------------------------------------------");
console.log("-----------------Question End----------------");
console.log("---------------------------------------------");

var scoreAsk = readlineSync.question("Do You want to know your Total Score, Please Give the Reply : ");
var scoreAnswer = "Yes";
if (scoreAsk.toUpperCase() == scoreAnswer.toUpperCase()) {
  console.log("Your Total Score is : " + score);
  console.log("--------------                  ------------");

}

if (score > 5) {
  console.log("YAY !! Congrats " + user + " ! You Passed and Your Total Score is : " + score);
} else {
  console.log("Sorry! You Failed! and Your Total Score is : " + score);
}

var highScore = [
  {
    id: "First",
    name: "Sumedh Nikalje",
    score: 14
  },
  {
    id: "Second",
    name: "Dheeraj Tiwari",
    score: 14
  },
]
console.log("---------------------------------------------");

var highName = readlineSync.question("Do You Know Current High Score Name, So You Give the reply : ");
var answersss = "Yes"

if (highName.toUpperCase() == answersss.toUpperCase()) {
  console.log("Current High Score Name is given Below ---")
  for (var i = 0; i < highScore.length; i++) {
    var highScores = highScore[i];
    console.log(highScores.id + " High Score Name is : " + highScores.name);
    console.log("High Score is : " + highScores.score);
    console.log("-------------------------");
  }

}
var newhighName = readlineSync.question("Do You Know New High Score Name, So You Give the reply : ");
var newanswersss = "Yes"

if (newhighName.toUpperCase() == newanswersss.toUpperCase()) {
  if (score > 14) {
    console.log("New High Score Name is : " + user);
    console.log("New High Score is : " + score);
  }
}

console.log("----------------------------------------------");
console.log("--------------                         -------");
console.log("-------------- !! Thank You !! ----------------");
console.log("--------------                         -------");
console.log("----------------------------------------------");


