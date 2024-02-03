var options = document.getElementById("options");
var header = document.getElementById("header");
function menuShow(){
    if (options.style.maxHeight) {
        options.style.transition = "max-height 0.1s ease-in-out";
        options.style.maxHeight = null;
        // header.style.borderRadius = "0";
        hbar.style.borderBottom = "none";
        document.getElementById("m-btn").classList.add("fa-bars");
        document.getElementById("m-btn").classList.remove("fa-xmark");
    } else {
        options.style.transition = "max-height 0.4s ease-in-out";
        // header.style.borderRadius = "0 0 15px 15px";
        // header.style.overflow = "hidden";
        options.style.maxHeight = "400px";
        hbar.style.borderBottom = "1px solid rgb(88, 152, 253)";
        document.getElementById("m-btn").classList.remove("fa-bars");
        document.getElementById("m-btn").classList.add("fa-xmark");
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     var services = document.getElementsByClassName("all-service");
//     for (var i = 0; i < services.length; i++) {
//         services[i].classList.add("slide");
//     }
// });
