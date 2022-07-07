function christmasCountdown (){
    const christmasDate = new Date("December 25, 2022 00:00");
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay =  Math.floor(diff/msInDay);
   document.querySelector(".days").textContent = displayDay;
   
   const displayHour = Math.floor((diff%msInDay) / msInHour);
   document.querySelector(".hours").textContent = displayHour;
   
   const displayMinute = Math.floor((diff%msInHour) / msInMinute);
   document.querySelector(".minutes").textContent = displayMinute;

   const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
   document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0){
document.querySelector(".days").textcontent=0;
document.querySelector(".hours").textcontent= 0;
document.querySelector(".minutes").textcontent= 0;
document.querySelector(".seconds").textcontent= 0;
clearInterval (timerId);
merryChristmas();

    }
}


let timerId = setInterval(christmasCountdown, 1000);

function merryChristmas (){
    const heading = document.querySelector("h1");
    heading.textContent= "Merry Christmas!! HO-HO-HO";
    heading.classList.add("red");
}

const button = document.querySelector("#myButton");
button.addEventListener("click", function(){
    document.querySelector("#myAudio").play();
})



christmasCountdown();

