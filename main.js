let dropNav = document.getElementById("dropNav")
let dropNavBtn = document.getElementById("dropNavBtn")
let form = document.getElementById("form")
let formSubmitText = document.getElementById("formSubmitText")

dropNavBtn.addEventListener("click",()=>{
    dropNav.classList.toggle("show")
})

form.addEventListener("submit",()=>{
    formSubmitText.style.display = "block"
})