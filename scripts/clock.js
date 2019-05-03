let hourSpan = document.querySelector(".hours");
let minutesSpan = document.querySelector(".minutes");
let secondsSpan = document.querySelector(".seconds");


setInterval(()=> {
    let dateObj = new Date();
    let hour = dateObj.getHours();
    let minutes = dateObj.getMinutes();
    let seconds = dateObj.getSeconds();
    
    let formatHour = hour < 10 ? "0" + hour : hour;
    let formatMinutes = minutes < 10 ? "0" + minutes : minutes;
    let formatSeconds = seconds < 10 ? "0" + seconds : seconds;
    
    hourSpan.textContent = formatHour + ": ";
    minutesSpan.textContent = formatMinutes + ": ";
    secondsSpan.textContent = formatSeconds;
}, 1000);