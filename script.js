    let digitalElement = document.querySelector('.digital');
    let segundosElement = document.querySelector('.p_s');
    let minutosElement = document.querySelector('.p_m');
    let horasElement = document.querySelector('.p_h');

function updateClock(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(seconds)}`;

    let segundosDeg = ((360 / 60) * seconds) - 90;  
    let minutesDeg = ((360 / 60) * minute) - 90;
    let hoursDeg = ((360 / 12) * hour) - 90;

    segundosElement.style.transform = `rotate(${segundosDeg}deg)`;
    minutosElement.style.transform = `rotate(${minutesDeg}deg)`;
    horasElement.style.transform = `rotate(${hoursDeg}deg)`;
}

function fixZero(time){
     return time < 10 ? `0${time}` : time;
}

    setInterval(updateClock, 1000);
    updateClock();