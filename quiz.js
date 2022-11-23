const quizForm  = document.querySelector(".quiz-form")
const btnSubmit = document.querySelector("#submit-btn");
const outputElement  = document.querySelector('#output');   
const correctAnswers = ["90", "right-angle-triangle"]

function calculateScore(){
    let score = 0 ;
    let index = 0 ;
    const formResult = new FormData(quizForm)
    for(let value of formResult.values()){
      if(value === correctAnswers[index]){
            score = score + 1 
      }
         index = index + 1
    }
    outputElement.innerHTML = "Your current score is " + score;
}



btnSubmit.addEventListener("click", calculateScore )