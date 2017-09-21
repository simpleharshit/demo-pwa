function check() {
    "use strict";

    var isChrome = !!window.chrome && !!window.chrome.csi;

    if (isChrome == false) return false;
    if (typeof Symbol == "undefined") return false;
    try {
        eval("class Foo {}");
        eval("var bar = (x) => x+1");
    } catch (e) { return false; }

    return true;
}

if (check() == false) {
    // The engine doesn't support those ES6 features
    // Use the boring ES5 :(

    //location.href = "./assets/static/not-supported.html";
}