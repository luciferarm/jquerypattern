/**
 * Created by JEFFERSON on 27/06/2017.
 */

function Question (question, choices ,answer) {
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


Question.prototype = {
	constructor: Question,
	create: function (values){
		var instance = Object.create(this);
		Object.keys(values).forEach(function(key){
			instance[key] = values[key];
		});
		return instance;
	},
	getAnswer :  function (){
		return  this.correctAnswer;
	},
	displayQuestion : function () {
	    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
	    var choiceCounter = 0;

	    this.choices.forEach(function (eachChoice)  {
	        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
	        choiceCounter++;
	    });
	    questionToDisplay += '</ul>';

	    console.log (questionToDisplay);
	}

}

function MultipleChoiceQuestion(question, choices ,answer){ 
	Question.call(this, question, choices ,answer);
};

MultipleChoiceQuestion.prototype = {
	constructor : MultipleChoiceQuestion,
	methods : Question.prototype.create({
		displayQuestion : function () {
		    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
		    var choiceCounter = 0;
		    this.choices.forEach(function (eachChoice)  {
		        questionToDisplay += '<li><input type="checkbox" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
		        choiceCounter++;
		    });
		    questionToDisplay += '</ul>';

		    console.log (questionToDisplay);
		}
	})
}
	

// using each type Question Inheritance

var question1 = new Question("What is your name ?",['jeff','jonh','josh'],1);
//question1.displayQuestion();

var question2 = new MultipleChoiceQuestion("How is your name composed ?",['jeff','jonh','josh'],[1,2]);
console.log(question1);
console.log(question2);
//question2.methods.displayQuestion();