let hamburgerBox = document.getElementById("hamburger-box");
let navContainer = document.getElementById("nav-container");

hamburgerBox.addEventListener("click", function(){
    hamburgerBox.classList.toggle("cross-ham-burger");
    navContainer.classList.toggle("active-nav");
});

let subNavContainer = document.querySelectorAll(".sub-nav-container");
subNavContainer.forEach(function(element) {
    element.addEventListener("click",function(){
        this.classList.toggle("active-sub-nav");
        console.log("sub nav clicked");
    })
})

