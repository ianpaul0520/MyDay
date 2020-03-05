let questionBox = document.getElementById('questionbox');
let submitButton = document.getElementById('submitbutton');

console.log(questionBox);

window.addEventListener('load',function() {
    setQuestions(questions, questionBox);
});