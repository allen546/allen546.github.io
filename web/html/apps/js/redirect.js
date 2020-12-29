// JavaScript source code
var redirect = function (url) {
    window.location = url;
    return url;
};
var redirect_to_w3schools = function () {
    var url = redirect("https://www.w3schools.in/html-tutorial/history");
    return url;
}
