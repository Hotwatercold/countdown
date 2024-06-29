const giveaway=document.querySelector(".giveaway")
const deadline=document.querySelector(".deadline")
const boxes=document.querySelectorAll(".deadline-format h4")
const monthname=["january","february","march","april","may","june","july","august","september","october","november","december"]
const dayname=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
//this is the current date



// this is the deadline Date
const deadlinedate=new Date(2024,8,9,12,12,12);
const year=deadlinedate.getFullYear();
const month=deadlinedate.getMonth();
const day=deadlinedate.getDate();
const weekday=deadlinedate.getDay();


giveaway.textContent=`giveaway ends on ${dayname[weekday]}, ${day} ${monthname[month]} ${year}`

function getremainingtime(){
    let tempdate=new Date();
    // let tempyear=tempdate.getFullYear();
    // let tempmonth=tempdate.getMonth();
    // let tempday=tempdate.getDate();
    const time=deadlinedate.getTime();
    let temptime=tempdate.getTime();
    let difference=time-temptime;
    let oneday=24*60*60*1000;
    let onehour=60*60*1000;
    let oneminute=60*1000
    let remainingday=Math.floor(difference/oneday);
    let remaininghour=Math.floor((difference % oneday)/onehour);
    let remainingminute=Math.floor((difference % onehour)/oneminute);
    let remainingsecond=Math.floor((difference % oneminute)/1000);
    console.log(difference);
    let values=[remainingday,remaininghour,remainingminute,remainingsecond];
    // function format(item){
    //     if(item<10)
    // }
    boxes.forEach(function(box,index){
        box.innerHTML=values[index];
    });

    if(difference<=0){
        clearInterval(countdown);
        deadline.innerHTML=`<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
}
let countdown=setInterval(getremainingtime,1000);
getremainingtime();
