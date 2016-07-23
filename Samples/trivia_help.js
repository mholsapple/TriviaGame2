//Start on Click
//Submit on Click
game.checkGuess()
//Next Button on Click

//New Game on Click

var questionsArray = [{
	question: "This is the first question",
	choices: ["one", "two", "three", "four"],
	correctChoice: "two"
}, {
	question: "This is the second question",
	choices: ["one", "two", "three", "four"],
	correctChoice: ""
}, {
	question: "This is the third question",
	choices: ["one", "two", "three", "four"],
	correctChoice: ""
}

}]

//Array of Question Objects [0,1,2,3]

var game = {

		//Variables
		questionTimeToGuess: 30,
		questionNumber: 0,
		correctAnswers: 0,
		wrongAnswers: 0,
		unAnswered: 0,

		//Functions
		timer: function(){

		},

		startGame: function(){

		},

		reset: function(){

		},
		checkGuess: function(){

			questionNumber++
			if (this.questionNumber === questionsArray.length) {
			}
		},

		printQuestions: function() {
			//reset timer
			this.timer()

			console.log(questionsArray[questionNumber].question)
			console.log(questionsArray[questionNumber].choices[0])
			console.log(questionsArray[questionNumber].choices[1])
			console.log(questionsArray[questionNumber].choices[2])
			console.log(questionsArray[questionNumber].choices[3])
			console.log(questionsArray[questionNumber].correctChoice)

		}

}

game.startGame();