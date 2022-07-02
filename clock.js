//display time
function realtimeClock(){
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);

    document.getElementById('clock').innerHTML = hours + " : " + minutes;
    var t = setTimeout(realtimeClock, 500);

    date = new Date();
    year = date.getFullYear();
    day = date.getDate();

    const weekday = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
    const monthday = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];

    let week = weekday[date.getDay()];
    let month = monthday[date.getUTCMonth()];

    document.getElementById("data").innerHTML = week + " " + day + " " + month;
}

//color picker
function changecolor(color){
    document.body.style.backgroundColor = color.value;
}

//console
console.log('%cCreated by HemeraleBack', "font-size: 30px; color: #A39FC8;")
console.log('%chttps://github.com/hemeraleback/Guidaldi', "font-size: 15px;")
