window.onscroll = () => handleScroll();

const navbar : HTMLElement = document.getElementById("navbar")!;

const sticky : number = navbar.offsetTop;

function handleScroll() : void {
    if (window.pageYOffset >= sticky) {
        navbar?.classList.add("sticky")
      } else {
        navbar?.classList.remove("sticky");
      }
}