String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.capitalize = function () {

    var initial = this.charAt(0).toUpperCase();
    var rest = this.slice(1);
    var restLower = "";

    for (var i = 0; i < rest.length; i++) {
        restLower += rest[i].toLowerCase();
    }

    return initial + restLower;

};

Date.prototype.truncate = function () {

    let day = this.getDate();
    let month = this.getMonth() + 1;
    let year = this.getFullYear();

    if (month < 10)
        month = "0" + month;

    return year + "-" + month + "-" + day + " 12:00:00";

};

Date.prototype.shorten = function () {

    let months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];    

    let day = this.getDate();
    let month = months[this.getMonth()];
    let dow = days[this.getDay()];

    if (month < 10)
        month = "0" + month;

    return day + " " + month + " " + dow;

};

$window.onresize = function () {

    let w = $window.innerWidth;
    let port = $view.port;

    if (1200 <= w)
        $view.port = "wide";
    else if (992 <= w)
        $view.port = "medium";
    else if (768 <= w)
        $view.port = "narrow";
    else if (500 <= w)
        $view.port = "tablet"
    else
        $view.port = "mobile"

    if ($view.ports.includes($view.port)) {

    } else {
        $view.ports.push($view.port);
        $bcast.shout("viewport_new");
    }

    if (port != $view.port)
        $bcast.shout("viewport_changed");

    $bcast.shout("viewport_" + $view.port);

};

$global.$fetch = new $fetch();

$fetch
    .begin()
        .addStylesheet("/File/Style/" + version)
        .addScript("/File/Script/" + version)
        .onFetch(function () {                                 

        })
    .start();