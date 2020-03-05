let questions = [ 
	{
		description:"Object 1",
		id: Math.floor(Math.random() * Math.floor(100))
	},
	{
		description:"Object 2",
		id: Math.floor(Math.random() * Math.floor(100))
	},
	{
		description:"Object 3",
		id: Math.floor(Math.random() * Math.floor(100))
	},
	{
		description:"Object 4",
		id: Math.floor(Math.random() * Math.floor(100))
	}
];

// Lets add Something.
questions[questions.length] = {
	name : `Object ${questions.length + 1}`,
	id : 2020,
	description : "This is a random description"
};

questions[questions.length] = {
	name : `Object ${questions.length + 1}`,
	id : 2021, 
	description : "This is a random description" + Math.floor(Math.random())
};

// console.log(questions[0].description)

function setQuestions(q, parentElement) {
	let id = [];
	let maxIndex = Math.floor(Math.random()*Math.floor(3));
	
	while (maxIndex <= 3) {
		
		//This randomIndex is responsible for how many questions will be posted.
		let randomIndex = Math.floor(Math.random() * Math.floor(q.length));
			id.push(randomIndex);
		if(maxIndex == 3) {
			
			console.log(`Final Array: ${id}`);
			// let qChild = document.createElement('div');
			// 	qChild.id = randomIndex;
			// 	qChild.className = "expand-sm";
			// let paragraphTag = document.createElement('p');
			// let textNode = document.createTextNode(q[randomIndex].description);
			// 	paragraphTag.appendChild(textNode);
			// 	qChild.appendChild(paragraphTag);
			// 	parentElement.appendChild(qChild);

			// 	console.log(qChild.id)
		}
	maxIndex++;
	}
}


function getId(obj,id) {
	for(mine in obj) {

		if(obj[mine].description != undefined) {
			console.log( mine + " " + obj[mine].description);
		} else {
			console.log("description is " + mine.description);
		}
	}
}
