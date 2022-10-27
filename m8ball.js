let userName = prompt("What can I call you?");

alert(`Hello, ${userName}!`);
let userQuestion = prompt("What is your question to the Magic 8 Ball?");
alert(`${userName} has asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = "";

switch (randomNumber) {
  case 8:
    eightBall = "It is certain";
    break;
  case 7:
    eightBall = "It is destined";
    break;
  case 6:
    eightBall = "It is decidedly so";
    break;
  case 5:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 3:
    eightBall = "My sources say no";
    break;
  case 2:
    eightBall = "Outlook not so good";
    break;
  case 1:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Reply hazy try again";
}

alert(`The Magic Eight Ball says, ${eightBall}.`);
