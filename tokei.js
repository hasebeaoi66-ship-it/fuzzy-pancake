function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("ja-JP");
    document.getElementById("clock").textContent = time;

    const nowTime = now.getHours() * 100 + now.getMinutes();

    let endTime;

    if (nowTime >= 840 && nowTime <= 930) {
        endTime = 9 * 60 + 30;
        document.getElementById("now zikanwari").textContent = "1時間目";

    } else if (nowTime >= 940 && nowTime <= 1030) {
        endTime = 10 * 60 + 30;
        document.getElementById("now zikanwari").textContent = "2時間目";

    } else if (nowTime >= 1040 && nowTime <= 1130) {
        endTime = 11 * 60 + 30;
        document.getElementById("now zikanwari").textContent = "3時間目";

    }  else if (nowTime >= 1140 && nowTime < 1230) {
        endTime = 12 * 60 + 30;
        document.getElementById("now zikanwari").textContent = "4時間目";

    }  else if (nowTime >= 1230 && nowTime <= 1315) {
        endTime = 13 * 60 + 15;
        document.getElementById("now zikanwari").textContent = "お昼休み";

    }  else if (nowTime >= 1330 && nowTime <= 1415) {
        endTime = 14 * 60 + 15;
        document.getElementById("now zikanwari").textContent = "5時間目";

    }  else if (nowTime >= 1425 && nowTime <= 1515) {
        endTime = 15 * 60 + 15;
        document.getElementById("now zikanwari").textContent = "6時間目";

    }  else if (nowTime >= 1525 && nowTime <= 1615) {
        endTime = 16 * 60 + 15;
        document.getElementById("now zikanwari").textContent = "7時間目";  

    }  else if (nowTime > 1615) {
         document.getElementById("now zikanwari").textContent = "休憩時間"; 

    }

     else {
        document.getElementById("now zikanwari").textContent = "授業時間外";
    }

    if (endTime !== undefined) {
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const remaining = endTime - currentMinutes;

        document.getElementById("owarimade").textContent =
            `${remaining}分`;
    } else {
        document.getElementById("owarimade").textContent = "--";
    }
}

updateClock();
setInterval(updateClock, 1000);