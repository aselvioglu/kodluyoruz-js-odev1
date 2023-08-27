let myName=prompt("isminiz nedir?");
let myNameDOM=document.getElementById("myName");
myNameDOM.innerHTML=myName;

let myClockDOM=document.getElementById("myClock");

function updateClock(){
let now = new Date();
let days=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day=days[now.getDay()];

myClockDOM.innerHTML=now.getHours()+ ":" + now.getMinutes()+ ":" + now.getSeconds() + " "+ day;}

function display(){

    updateClock();

    setTimeout (display, 1000);

    }
display();
