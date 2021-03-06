// UI Variables 
const timerDemo = document.getElementById("timerDemo");
//timer 
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    let am_pm = h > 12 ? 'PM' : 'AM';
    m = addZero(m);
    s = addZero(s);
    timerDemo.innerHTML = `
    ${h} : ${addZero(m)} : ${addZero(s)}${am_pm}};
    `
    setTimeout(startTime, 500);
}

function addZero(i) {
   if (i < 10) {
       i = "0" + i
   }
   return i;
}