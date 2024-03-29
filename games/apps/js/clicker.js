// Clicker.js: Clicker Javascript Source Code
var blowpercent = 0.08;
var level = 1;
var addpercent = 0.05;
var newlevelcoins = 10;
var clicked = function () {
    var meter = document.getElementById("meter");
    meter.value += blowpercent;
    if (meter.value >= 1) {
        var exploded = Math.random()*1000;
        if (exploded >= 999){
            alert("气球吹爆了");
            meter.value = 0;
            return;
        }
        var score = document.getElementById("score").innerHTML;
        score++;
        meter.value = meter.value % blowpercent;
        blowpercent += 0.05;
        if (blowpercent >= 0.3) {
            blowpercent = 0.1;
            addpercent += 0.005;
        }
        document.getElementById("score").innerHTML = score;
    };
    return score;
}
var sell = function () {
    var score = document.getElementById("score").innerHTML;
    var coins = parseInt(document.getElementById("coins").innerHTML);
    coins += Math.floor(score / 3);
    score = score % 3;
    document.getElementById("score").innerHTML = score;
    document.getElementById("coins").innerHTML = coins;
    if (coins >= newlevelcoins) {
        newlevelcoins *= 2;
        level += 1;
        document.getElementById("level").innerHTML = level;
    }
    return score;
}
var buy = function (objectid) {
    var secs;
    var coins = document.getElementById("coins").innerHTML;
    switch (objectid) {
        case 1:
            if (coins < 15) {
                document.getElementById("warning").innerHTML = "Error: Not Enough Coins.";
                return;
            };
            secs = 5;
            coins -= 15;
            break;
        case 2:
            if (coins < 25) {
                document.getElementById("warning").innerHTML = "Error: Not Enough Coins.";
                return;
            };
            coins -= 25;
            secs = 3;
            break;
        case 3:
            if (coins < 35) {
                document.getElementById("warning").innerHTML = "Error: Not Enough Coins.";
                return;
            };
            coins -= 35;
            secs = 1;
            break;
    };
    document.getElementById("warning").innerHTML = "Purchase Successful."
    document.getElementById("coins").innerHTML = coins;
    var round = setInterval(function () {
        clicked();
    }, secs * 1000);
    return null;
}
