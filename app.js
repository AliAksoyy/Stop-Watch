// variable 

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn =document.querySelector("#resertBtn")


// variables for time values

let seconds =0
let minutes = 0
let hours = 0
let leadingSeconds = 0
let leadingMinutes = 0
let leadingHours = 0

// stop watch function

function stopWatch () {
    seconds++
    if(seconds / 60 ===1) {
        seconds = 0
        minutes++

        if(minutes / 60 ===1) {
            minutes = 0;
            hours++;
        }
    }
    let displayTimer = document.querySelector("#timer").innerText = `${hours}: ${minutes} ${seconds}`
  
}
window.setInterval(stopWatch,1000)


