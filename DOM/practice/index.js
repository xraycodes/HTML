document.querySelector(".grandparent").addEventListener("click", (e)=>{
    console.log('grandparent capture')}, 
     {once : true}
)

document.querySelector(".grandparent").addEventListener("click", (e)=>{
    console.log('grandparent')}
)


document.querySelector(".parent").addEventListener("click", (e)=>{
    console.log('parent')
    e.stopPropagation()
})

document.querySelector(".child").addEventListener("click", (e)=>{
    console.log('child')
})