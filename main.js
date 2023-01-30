//document.getElementById("count-el").innerText = 4//
let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

let count=0

console.log(countEl)


function increment()
{
    count=count + 1
    countEl.innerText=count
}
function decrement()
{
    count=count-1
    countEl.innerText=count
}

function save()
{
    let countstr= count + " -> "
    saveEl.innerText+=countstr
    console.log(count)
}
