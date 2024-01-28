let output = ""
let tempResult = ''


const answer = document.querySelector(".answer")
const clear = document.querySelector(".clear")

const seven = document.querySelector(".seven")

let numbers = ["one","two","three","four","five","six","seven","eight","nine"]

clear.addEventListener("click", ()=>{
    output = 0
    answer.textContent = output
})

// for (let i=0; i < numbers.length; i++) {
//     console.log(typeof(Number(document.querySelector(`.${numbers[i]}`).textContent)))
//     console.log(answer.textContent)
//     document.querySelector(`.${numbers[i]}`).addEventListener("click", ()=>{
//         let result = Number(document.querySelector(`.${numbers[i]}`).textContent)
//         answer.textContent = result
//     })
// }

    for (let i=0; i < numbers.length; i++) {
        document.querySelector(`.${numbers[i]}`).addEventListener("click", ()=>{

            let selection = document.querySelector(`.${numbers[i]}`).textContent
            console.log("this is  temp result " + tempResult)
            console.log("this is selection " + selection)
            console.log("this is result" + tempResult + selection)
    })
}