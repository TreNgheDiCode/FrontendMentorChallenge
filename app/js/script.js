const menuBtn = document.querySelector("#menu-btn");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeEle= document.querySelectorAll(".has-fade");
const hero = document.querySelector(".hero");

menuBtn.addEventListener("click", function() {
    if (header.classList.contains("open")) {
        body.classList.remove("noscroll");
        hero.classList.remove("inActive")
        header.classList.remove("open"); // Close menu
        fadeEle.forEach(function(element) {
            element.classList.remove("fade-in");
            element.classList.add("fade-out");
        });
        
    } else {
        body.classList.add("noscroll");
        hero.classList.add("inActive")
        header.classList.add("open"); // Open menu
        fadeEle.forEach(function(element) {
            element.classList.remove("fade-out");
            element.classList.add("fade-in");
        });
    }
});