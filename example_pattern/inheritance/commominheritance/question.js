/**
 * Created by JEFFERSON on 27/06/2017.
 */
function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

var Question = function (question, choices ,answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
  //this.userAnswer = "";

  // private property
  var newDate = new Date();

  // private constant
  NEWDATE  = newDate.toLocaleDateString();

  //privade method
  this.getDate = function () {
     return NEWDATE;
  }

  // test
  console.log("Question created : " + this.getDate());
};

Question.prototype.getAnswer = function () {
    return  this.correctAnswer;
};

Question.prototype.displayQuestion = function () {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
    choiceCounter = 0;

    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += '</ul>';

    console.log (questionToDisplay);
};

var MultipleChoiceQuestion = function (question, choices ,answer){
    MultipleChoiceQuestion.super_.call(this,question, choices ,answer);
}

MultipleChoiceQuestion.prototype.displayQuestion = function () {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
    choiceCounter = 0;

    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<li><input type="checkbox" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += '</ul>';

    console.log (questionToDisplay);
};

inherits(MultipleChoiceQuestion,Question);

var question1 = new Question("What is your name ?",['jeff','jonh','josh'],1);
question1.displayQuestion();

var question2 = new MultipleChoiceQuestion("What is your name ?",['jeff','jonh','josh'],[1,3]);
question2.displayQuestion();