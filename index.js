function setLegend (legendText) {
	// Sets the field used to display questions and prompts
	$('.answerForm').append(`<legend>${legendText}</legend>`)
}

function handleFirstVisit() {
	// Renders the start screen for users' initial landing
	// Clarence sees a prompt asking him if he wants to begin, with a large 'Start' button.
	// Intrigued, Clarence clicks the button.
	console.log("handleFirstVisit ran");
	setLegend("Ready to test your knowledge about the strange world you live in?")
	$('.answerForm').append('<button class=\"startButton\">Let\'s go!</button>')
	$('.startButton').click(e => {		
		handleNewQuestion();		
	})	
}

function handleNewQuestion() {
	// Renders new question, answers, score, and page count
	// The prompt is replaced by a question about strange events in the news.
	// Below that, Clarence sees four buttons labeled with different answers.
	// At the very bottom in the left, Clarence sees a counter indicating what question he is on: "Question 1 of 10" it says.
	// To the right of that, he sees his current score: +0/-0, with the plusses and minuses in large playful fonts, colored green and red respectively. 
	// Hovering his mouse over a button, Clarence notices it changes color
	console.log("handleNewQuestion ran");
}

function handleFeedback() {
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
	handleFirstVisit();	
}

$(handleQuiz())
