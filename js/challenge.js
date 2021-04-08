const pauseBtn = document.getElementById('pause')
const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const heartButton = document.getElementById('heart')
const inputValue=document.getElementById('comment-input')
const submitBtn=document.getElementById('submit')
const formNo1=document.getElementById('comment-form')

let seconds = 0;
function counter(e) {
    document.getElementById('counter').innerHTML = seconds
    if (pauseBtn.innerHTML === "resume") {
        seconds
    } else {
        seconds += 1
    }
}
counter(seconds)
let inetval = setInterval(counter, 1000)

const decrese = minusButton.addEventListener('click', e => {
    e = seconds -= 1
    document.getElementById('counter').innerHTML = seconds
})

const increse = plusButton.addEventListener('click', e => {
    e = seconds += 1
    document.getElementById('counter').innerHTML = seconds
})


const increseHeart = heartButton.addEventListener('click', (e) => {
    let currentCount = document.getElementById('counter').innerHTML
    let parentDiv = document.getElementById('list')
    let newP = document.createElement('li')
    let countArray = []
    const nice = heartButton.onclick = (function outer() {
        let counter = 0;
        counter += 1;
        countArray.push(counter)
        parentDiv.appendChild(newP)
        newP.className = "clickedMsg"
        newP.innerHTML = `${currentCount} liked it  ${e.detail}times`
    })
})


pauseBtn.addEventListener('click', function () {
    (pauseBtn.innerHTML === "resume" ? pauseBtn.innerHTML = "pause" : pauseBtn.innerHTML = "resume")
    if (pauseBtn.innerHTML === "pause") {
            minusButton.disabled = false,
            plusButton.disabled = false,
            heartButton.disabled = false
    } else {
            minusButton.disabled = true,
            plusButton.disabled = true,
            heartButton.disabled = true
    }
})

const addingComment=submitBtn.addEventListener('click',function(e){
    e.preventDefault()
    let uL=document.createElement('ul')
    formNo1.appendChild(uL)
    uL.id="uL1"
    let uLID=document.getElementById('uL1')
    let lI=document.createElement('li')
    uLID.appendChild(lI)
    lI.innerHTML=inputValue.value
    inputValue.value=""
})