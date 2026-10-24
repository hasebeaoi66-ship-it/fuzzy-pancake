function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("ja-JP");
    document.getElementById("clock").textContent = time;

    const nowTime = now.getHours() * 100 + now.getMinutes();

    let endTime;

    if (nowTime >= 840 && nowTime < 931) {
        endTime = 9 * 60 + 30;
        document.getElementById("now zikanwari").textContent = "1時間目";
    } else if (nowTime >= 940 && nowTime < 1031) {
        endTime = 10 * 60 + 30;
        document.getElementById("now zikanwari").textContent = "2時間目";
    } else if (nowTime >= 1040 && nowTime < 1131) {
        endTime = 11 * 60 + 30;
        document.getElementById("now zikanwari").textContent = "3時間目";
    } else {
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