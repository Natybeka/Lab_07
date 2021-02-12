const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.min');
const secondHand = document.querySelector('.sec');

let date = new Date();
// let seconds = date.getSeconds();
// let hour = date.getHours();
// console.log(hour);
// let minutes = date.getMinutes();



document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        let date = new Date();
        var seconds = date.getSeconds() * 6;
        var minutes = date.getMinutes() * 6;
        var hours = (date.getHours() / 12) * 360;
        secondHand.style.transform = `rotateZ(${seconds}deg)`;
        minuteHand.style.transform = `rotateZ(${minutes}deg)`;
        hourHand.style.transform = `rotateZ(${hours}deg)`;
    });



});