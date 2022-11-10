let DOB = new Date("december 03, 2022 ,00:00:00");
setInterval(()=>{
let today= new Date();// it return the current date in millisecond
let deff=DOB-today;
let d=Math.floor(deff/(24*60*60*1000));
let h=Math.floor((deff % (24*60*60*1000))/(60*60*1000));
let m=Math.floor((deff % (60*60*1000))/(60*1000));
let s=Math.floor((deff % (60*1000))/1000);
document.getElementById("days").innerText = `${d}`;
document.getElementById("hours").innerText =`${h}`;
document.getElementById("minutes").innerText =`${m}`;
document.getElementById("seconds").innerText = `${s}`;
ducument.getElementById("submit").innertext=00;
},1000)
