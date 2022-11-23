const btnSubmit = document.querySelector("#submit-btn")
console.log(btnSubmit)



function submitHandler(e){
  e.preventDefault()
}

btnSubmit.addEventListener("click", submitHandler)