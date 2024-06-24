const giveaway=document.querySelector(".giveaway")
const deadline=document.querySelector(".deadline")
const boxes=document.querySelectorAll(".deadline-format h4")
const monthname=["january","february","march","april","may","june","july","august","september","october","november","december"]
const dayname=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//this is the current date
let tempdate=new Date();
let tempyear=tempdate.getFullYear();
let tempmonth=tempdate.getMonth();
let tempday=tempdate.getDate();
let temptime=tempdate.getTime();

// this is the deadline Date
const deadlinedate=new Date(2024,8,9,12,12,12);
const year=deadlinedate.getFullYear();
const month=deadlinedate.getMonth();
const day=deadlinedate.getDate();
const weekday=deadlinedate.getDay();
const time=deadlinedate.getTime();

giveaway.textContent=`giveaway ends on ${dayname[weekday]}, ${day} ${monthname[month]} ${year}`

let difference=time-temptime;
console.log(difference);
