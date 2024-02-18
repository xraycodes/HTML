const subscribed = document.querySelector("#subscribe")
const visa = document.querySelector("#visa")
const para = document.querySelector("#sub")
const para2 = document.querySelector("#sub2")
const button = document.querySelector("#btn")



button.addEventListener("click", () => {
    if (subscribed.checked) {
        para.innerHTML = "You are subscribed"
    }
    else {
        para.innerHTML = "You are not subscribed"
    }
})

button.addEventListener("click", () => {
    if (visa.checked) {
        para2.innerHTML = "You are using visa"
    }
    else {
        para2.innerHTML = "You are not using visa"
    }
})