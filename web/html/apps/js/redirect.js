// JavaScript source code
var redirect = function (url) {
    alert("You are about to be redirected to " + url);
    var win = window.open(url, '_blank');
    win.focus();
    return url;
};
var redirect_to_w3schools = function () {
    var url = redirect("https://www.w3schools.in/html-tutorial/history");
    return url;
};
var redirect_to_khanacademy = function () {
    var url = redirect("https://www.khanacademy.org/computing/computer-programming/html-css");
    return url;
};
var redirect_to_codacademy = function () {
    var url = redirect("https://www.codecademy.com/learn/learn-html");
    return url;
};
var redirect_to_index = function () {
    var url = redirect("https://allen546.github.io/web/");
    return url;
};
var redirect1 = function () {
    var url = redirect("https://www.computerhope.com/jargon/h/html.htm");
    return url;
};
