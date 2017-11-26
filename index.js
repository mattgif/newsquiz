// question bank (generated by questionBank.js)
const qBank = questionBank

// question and score tracker
const userData = {
	question: 0,
	posScore: 0,
	negScore: 0,
	totalQuestions: 10
}

function setLegend (legendText) {
	// Sets the field used to display questions and prompts
	$('.answerForm').append(`<legend>${legendText}</legend>`)
}

function handleFirstVisit() {
	// Renders the start screen for users' initial landing
	// Clarence sees a prompt asking him if he wants to begin, with a large 'Start' button.
	// Intrigued, Clarence clicks the button.
	console.log("handleFirstVisit ran");
	// clear out anything that might already be in quizbox
	$('.answerForm').empty()
	setLegend("Ready to test your knowledge about the strange world you live in?")	
	$('.answerForm').append('<button class=\"startButton js-nextButton\">Let\'s go!</button>')
}

function handleNextButton() {
	// Handles actions when next/start are clicked
	
	$('.answerForm').on('click', '.js-nextButton', event => {
		console.log('Next button clicked')
		// checks to see if user has seen all questions
		if (userData.question >= userData.totalQuestions) {
		handleFinal();
		} else {
		userData.question += 1;
		handleNewQuestion();
		};
	})
	
}

function handleAnswerClicked() {	
	// listener for answer buttons
	$('.answerForm').on('click','.answer', e=> {
		console.log("Answer clicked");
		let selectedAnswer = $(e.target).text()		
		let qNum = userData.question;
		let question = qBank[qNum];
		// sets correct to 1 or 0 depending on whether the answer is correct
		let correct = question.isCorrect(selectedAnswer);		
		handleFeedback(correct);
	});
}

function createFooter() {
	// creates the footer with question number and current score
	$('.answerForm').append(`
		<footer>				
			<div class="pageCount">
				<p>Question ${userData.question} of ${userData.totalQuestions}</p>	
			</div>		
			<div class="score">
				<span class="posScore">+${userData.posScore}</span>/<span class="negScore">-${userData.negScore}</span>
			</div>
		</footer>
		`);						
}

function handleNewQuestion() {
	// Renders new question, answers, score, and page count
	// The prompt is replaced by a question about strange events in the news.
	// Below that, Clarence sees four buttons labeled with different answers.
	// At the very bottom in the left, Clarence sees a counter indicating what question he is on: "Question 1 of 10" it says.
	// To the right of that, he sees his current score: +0/-0, with the plusses and minuses in large playful fonts, colored green and red respectively. 
	// Hovering his mouse over a button, Clarence notices it changes color
	console.log("handleNewQuestion ran");
	// clear previous items
	$('.answerForm').empty()
	let qNum = userData.question;
	let question = qBank[qNum];
	let answers = question.generateAnswers()	
	// grabs the question at qNum index and sets the question text to qText
	setLegend(question.qText);

	// creates buttons for each answer
	for (let i=0;i<answers.length;i++) {
		$('.answerForm').append(`<button class=\"answer\">${answers[i]}</button>`)
	};

	// add footer
	createFooter();
}

function handleFeedback(correct) {
	// Listens for user input and generates feedback 
	// Clarence clicks a button, and sees all of the wrong answers fall away from the screen. His choice was among them.
	// He sees a red box below the quiz box that says "Incorrect!" in big letters, and displays some humorous text. 
	// He sees a pulsing ">" arrow on the right side of the box, inviting him to continue.
	// He clicks it. The question is replaced with a new question, and four fresh choices. 
	// At the bottom he notices the page counter has increased.
	// To the right of that, he sees his new score: +0/-1
	// He makes a selection. The incorrect answers fall away. What joy, his is not among them!
	// Below the quiz block is a green box that says "Yes, but why do you know that?", and displays some humorous text.
	// Clarence again clicks the ">" on the right side of the box. 
	// He again sees the page counter has incremented. He sees his new score too: +1/-1
	console.log("handleFeedback ran")
}

function handleFinal() {
	// Renders a summary page with user score and start over button
	console.log("handleFinal ran")
}

function handleQuiz() {
	$('.answerForm').submit(e => {
		e.preventDefault();
	})
	handleNextButton();
	handleAnswerClicked();	
	handleFirstVisit();	
}

$(handleQuiz())
