const btnTriangle = document.querySelector("#btn-triangle")
const input = document.querySelectorAll(".input-angle")
const outputEl = document.querySelector("#output")



function calculateSum(angle1 , angle2, angle3){
   const sumOfAngles = angle1 + angle2 + angle3
   return sumOfAngles;
}

function isTriangle(){
  const sumOfAngles = calculateSum(Number(input[0].value), Number(input[0].value ),Number(input[0].value))
  if(sumOfAngles === 180){
    outputEl.innerHTML = "Yay, It is a triangle"
  }else{
    outputEl.innerHTML = "Yay, It not a triangle"
  }
}



btnTriangle.addEventListener("click", isTriangle)