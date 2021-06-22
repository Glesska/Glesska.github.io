window.onscroll = function () {

    if (document.documentElement.scrollTop >= 100) {
        document.getElementById("navbar").style.background = "black";
        document.getElementById("navbar").style.padding = "20px 10px";

    } else {

        document.getElementById("navbar").style.background = "rgba(255, 99, 71, 0)";
        document.getElementById("navbar").style.padding = "20px 10px";
        document.getElementById("nav").style.color = "white";
    }


}