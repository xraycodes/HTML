let randomNumber = 0

document.querySelector("#buttons").addEventListener("click", function(){
    // console.log(randomNumber)
    randomNumber = Math.floor(Math.random() * 101)
    document.querySelector("#random-number").textContent = randomNumber
})


