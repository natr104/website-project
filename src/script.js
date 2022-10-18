window.onscroll = function () { return handleScroll(); };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function handleScroll() {
    if (window.pageYOffset >= sticky) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("sticky");
    }
    else {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("sticky");
    }
}
