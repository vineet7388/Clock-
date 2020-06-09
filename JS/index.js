const figureParts = document.querySelectorAll(".figure-part");
var today = new Date(); 
console.log(today);
var seconds=today.getSeconds()*6;
var mins=today.getMinutes()*6;
var hrs=((today.getHours()%12)*30) + (mins/360)*30;
console.log(seconds,mins,hrs);
console.log(today.getHours());
var count=seconds;
figureParts[1].style.transform
                         = `rotate(${seconds}deg)`;
figureParts[2].style.transform
                         = `rotate(${mins}deg)`;
figureParts[3].style.transform
                         = `rotate(${hrs}deg)`;

function setClockWithCurrentTime() {
  seconds=seconds+6;

  figureParts[1].style.transform
                         = `rotate(${seconds}deg)`;

if(count%60==0 && count!=0)
{
  mins=mins+6;
  figureParts[2].style.transform
                         = `rotate(${mins}deg)`;
}

if(count%60==0 && count!=0)
{
  hrs=hrs+.5;
  figureParts[3].style.transform
                         = `rotate(${hrs}deg)`;
}

count++;
}

function start(){

setInterval(setClockWithCurrentTime, 1000);
}

start();