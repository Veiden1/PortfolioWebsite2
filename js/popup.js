document.getElementById("btn_close").onclick = btnclose;
document.getElementById("calculate").onclick = clcltbtn;

function clcltbtn() {
    document.getElementById('popup').style = "visibility:visible; opacity:1";
    document.getElementById('popup-content').style = "opacity:1; transform:translate(0px, 0px);";
}

function btnclose() {
    document.getElementById('popup').style = "visibility:hidden; opacity:0";
    document.getElementById('popup-content').style = "opacity:0; transform: translate(0px, -100%)";
}

window.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) {
        document.getElementById('popup').style = "visibility:hidden; opacity:0";
        document.getElementById('popup-content').style = "opacity:0; transform: translate(0px, -100%)";
    }
}, false);

$('.ignore').click(function(e) {
    var anch = this.hash.slice(0);
    if (!anch || !anch[0] === "#") return;
    e.preventDefault();
    window.location.hash = '';
    var offset = $(anch).offset();
    $("html, body").animate({ scrollTop: $(anch).offset().top }, 100);
    if (history.pushState) { history.pushState({}, null, window.location.pathname); }
});