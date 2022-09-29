
const start = document.querySelector("#startStopBtn")
const resetBtn = document.querySelector("reset")
const timer = document.querySelector("#timer")

let sec = 0
let min = 0
let hour = 0
let lsec =0
let lmin = 0
let lhour = 0

let interval;

function ali () {
    sec++
    if((sec / 10) == 1) {
        sec = 0;
        min++
        if((min / 60 == 1)) {
            min = 0
            hour++  
        }

    }
     if (sec < 10) {
       lsec = "0" + sec.toString();  
     } else {
        lsec = sec
     }

     if(min<10) {
        lmin = "0" + min.toString()
     }else {
        lmin = min
     }
     if(hour<10 ) {
        lhour = "0" +hour.toString()
     }
    
    document.querySelector("#timer").innerText = `${lhour} : ${lmin} : ${lsec}`;
}



start.addEventListener("click", function(e) {

    interval = setInterval((ali),1000)
   e.path[1].firstElementChild.setAttribute("class", "")
    e.target.id ="pause"

    e.path[2].querySelector("i").innerHTML = `<i class="fa-solid fa-pause"id="pause"></i>`;})
    





































// !1111111111111111111111

// variable 

// const startStopBtn = document.querySelector("#startStopBtn");
// const resetBtn =document.querySelector("#resetBtn")



// // variables for time values

// let seconds =0
// let minutes = 0
// let hours = 0
// let leadingSeconds = 0
// let leadingMinutes = 0
// let leadingHours = 0

// // variables for set interval & functions
// let timerInterval = null;
// let timerStatus = "stopped"

// // stop watch function

// function stopWatch () {
//     seconds++
//     if(seconds / 60 ===1) {
//         seconds = 0
//         minutes++
        

//         if(minutes / 60 ===1) {
//             minutes = 0;
//             hours++;
//         }
//     }
//     if(seconds<10){
//         leadingSeconds = "0" + seconds.toString()
//     }else {
//         leadingSeconds = seconds
//     }
//     if(minutes<10){
//         leadingMinutes = "0" + minutes.toString()
//     }else {
//         leadingMinutes = minutes
//     }
//     if(hours<10){
//         leadingHours = "0" + hours.toString()
//     }else {
//         leadingHours = hours
//     }

//     let displayTimer = document.querySelector("#timer").innerText = `${leadingHours}: ${leadingMinutes}: ${leadingSeconds}`
  
// }
// // window.setInterval(stopWatch,1000)
// startStopBtn.addEventListener("click", function() {
//     if(timerStatus === "stopped") {
//         timerInterval = window.setInterval(stopWatch, 1000);
//         document.getElementById("startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
//         timerStatus = "started"
//     } else {
//         window.clearInterval(timerInterval)
//         document.getElementById(
//           "startStopBtn"
//         ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
//         timerStatus = "stopped"
//     }
// })

// resetBtn.addEventListener("click", ()=> {
//     console.log("ali")
//     let leadingSeconds = "0"+0;
//     let leadingMinutes = "0" +0;
//     let leadingHours = "0" +0;
//     displayTimer = document.querySelector(
//       "#timer"
//     ).innerText = `${leadingHours}: ${leadingMinutes}: ${leadingSeconds}`;
// })




