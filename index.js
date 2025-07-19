'use strict';

function updateTime(){
    const timeElement = document.getElementById('live-time');
    const now = new Date();

    const hours=now.getHours()%12||12;
    const minutes=String(now.getMinutes()).padStart(2, '0');
    const seconds=String(now.getSeconds()).padStart(2, '0');
    const ampm=now.getHours()>=12? 'PM' : 'AM';

    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

    timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);

updateTime();