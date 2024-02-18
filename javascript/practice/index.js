let age = 16;
let license = false;


myText = document.querySelector("#myText")
mySubmit = document.querySelector("#mySubmit")
resultElement = document.querySelector("#resultElement")

mySubmit.addEventListener("click", () => {
    age = Number(myText.value)
    if (age> 18) {
        resultElement.textContent = "You may enter website"
    }
    else if (age === 0 || isNaN(age)) {
        resultElement.textContent = "You can't be 0 years old or enter valid number"
    }
    else {
        resultElement.textContent = "You are too young to enter website"
    }
})

console.log(myText.value)