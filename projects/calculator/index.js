let output = ""


const answer = document.querySelector(".answer")
const clear = document.querySelector(".clear")

const seven = document.querySelector(".seven")

let numbers = ["one","two","three","four","five","six","seven","eight","nine"]

clear.addEventListener("click", ()=>{
    output = 0
    answer.textContent = output
})

for (let i=0; i < numbers.length; i++) {
    console.log(typeof(Number(document.querySelector(`.${numbers[i]}`).textContent)))
    console.log(answer.textContent)
    document.querySelector(`.${numbers[i]}`).addEventListener("click", ()=>{
        let result = Number(answer.textContent) + Number(document.querySelector(`.${numbers[i]}`).textContent)
        answer.textContent = result
    })
}
