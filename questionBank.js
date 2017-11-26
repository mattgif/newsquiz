// Question bank for quiz. Array of question objects. 
const questionBank = []

// list of questions/answers. can be expanded, contracted, etc w/o affecting qBank
const questionList = [
	{qText: "Limousine driver \"Mad\" Mike Hughes made headlines by announcing his plans to launch himself over the Mojave Desert in a home built, steam powered rocket, in order to do what?",
	correctAnswer: "Prove that the Earth is flat",
	wrong1: "Demonstrate his mortality",
	wrong2: "Contact extraterrestrial life",
	wrong3: "Avoid paying taxes"
	},
	{qText: "A Pennsylvania man who frequently joked that he didn’t want to go to the afterlife hungry got dying wish when what happened?",
	correctAnswer: "He was buried with two cheesesteaks",
	wrong1: "He was displayed at his funeral gripping a chain of sausage links",
	wrong2: "He died while eating a 9 lbs. cheeseburger topped with fried eggs",
	wrong3: "He drowned in a pot of gumbo",
	},
	{qText: "When Montreal police issued 38-year old Taofik Moalla a $118 ticket for “screaming in public,” he defended himself, stating that he was merely:",
	correctAnswer: "Singing along to C+C Music Factor’s 1990 hit \"Everybody Dance Now\"",
	wrong1: "Sitting on a park bench and reading to his daughter, who refused to leave the car",
	wrong2: "Warning people to avoid the local bakery’s spoiled gravy and ham croissants",
	wrong3: "Calling for his pet goat, who had scaled several stories of a nearby building",
	},
	{qText: "The suspicious odor that caused a Baltimore high school to be evacuated in October 2017, turned out to be what?",
	correctAnswer: "A pumpkin spice air freshener",
	wrong1: "Halloween candy… from October 2003",
	wrong2: "The boy’s locker room",
	wrong3: "A stray dog that had been eating chocolate pudding",
	},
	{qText: "In November 2017, officials in Tampico, Mexico found themselves assuring the public that it was not the end times after what happened?",
	correctAnswer: "Small fish rained from the sky",
	wrong1: "A video of a cat appearing to say \"Ave Satanas,\" or \"Hail Satan,\" went viral",
	wrong2: "A Nativity scene was swallowed by a sink hole",
	wrong3: "Donald Trump scheduled a visit to the town",
	},
	{qText: "When journalists investigated reports of a car crashing into a pizza and ice cream shop on Long Island, they discovered what?",
	correctAnswer: "A crew filming a scene for a Billy Crystal movie",
	wrong1: "Phish fans piling out of a wrecked Civic, who didn’t seem all that upset",
	wrong2: "A group of dieticians who had crashed after sneaking out of a conference on weight loss",
	wrong3: "Just a lot of pizza, and a lot of ice cream",
	},
	{qText: "To raise money for low-income New York City immigrants, New York City cabbies did what?",
	correctAnswer: "Posed for a provocative pinup calendar",
	wrong1: "Sold dishes from their home countries, cooked by the heat of a running cab engine",
	wrong2: "Raffled a chanced to win $1000 by “guessing that smell” in the backseat",
	wrong3: "Sold a book of poems, composed entirely from the rambling of drunk passengers",
	},
	{qText: "When police in Casper, Wyo. arrested a man for public intoxication, he defended himself by claiming what?",
	correctAnswer: "He was a time traveler and aliens forced him to drink",
	wrong1: "He was a robot that required alcohol to function",
	wrong2: "The Russian government secretly replaced his tap water with vodka",
	wrong3: "He never actually expected to win the presidential election",
	},
	{qText: "Expecting to find a tumor in the lung of a smoker suffering from a bad cough, British doctors instead found this:",
	correctAnswer: "A toy traffic cone he had swallowed as a child",
	wrong1: "A thick wad of cat hair from years of sharing a drinking glass with \"Timsy,\" his pet cat",
	wrong2: "That he was missing one lung entirely",
	wrong3: "A small bag of cocaine he had swallowed before flying home from Colombia",
	},
	{qText: "For only $85, Detroit Red Wings fans can purchase this commemorative item:",
	correctAnswer: "Melted ice from their former hockey rink",
	wrong1: "A puck that has been kissed by Steve Yzerman (who wore red lipstick for the occasion)",
	wrong2: "A cast of Sergei Fedorov\'s teeth",
	wrong3: "A photograph of a Zamboni, with their face Photoshopped onto the driver\'s",
	},
]

//  Durstenfeld shuffle algorithm for returning answers in randomized order 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Question constructor for quiz app. 'qText' is the question,
// 'answers' is an dic of answer choices, which are k/v pairs with 1 denoting the correct answer
// and 0 denoting incorrect answers
function question(quesText,correctAnswer,wrong1,wrong2,wrong3) {
	q = {
		qText: quesText,
		answers: {},
		getQuestion: function() {
				return this.qText
			},
		// returns shuffled array of answer text
		generateAnswers: function() {
			// set ref to COPY of keys array
			let answerArray = Object.keys(this.answers).slice();
			shuffleArray(answerArray);
			return answerArray;
			},
		isCorrect: function(text){
			return this.answers[text];
			},
	}
	q.answers[correctAnswer] = 1;
	q.answers[wrong1] = 0;
	q.answers[wrong2] = 0;
	q.answers[wrong3] = 0;
	return q;
}

// generate and shuffle question bank
function buildQBank(questionList) {
	console.log('Building Question Bank')
	for (let i = 0; i<questionList.length; i++) {
		q = question(questionList[i].qText,questionList[i].correctAnswer,questionList[i]['wrong1'],questionList[i]['wrong2'],questionList[i]['wrong3'])
		questionBank.push(q)
	}
	shuffleArray(questionBank)
}

$(buildQBank(questionList))

