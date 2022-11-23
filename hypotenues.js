const inputSide = document.querySelectorAll(".side-input")
const btnCheck = document.querySelector("#btn-check")
const outputElement = document.querySelector("#output")



function calculateSum(a , b){
  const sumOfSides = a*a + b*b
   return sumOfSides;
}


function calculateHypotenues(){
    const sumOfSides = calculateSum(Number(inputSide[0].value) , Number(inputSide[1].value))
    const lengthOfHypo = Math.sqrt(sumOfSides)
    outputElement.innerHTML = "The hypotenues of the triangle is " + lengthOfHypo
}


btnCheck.addEventListener("click" , calculateHypotenues)