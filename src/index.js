import initialPage from "./home";
import removeContent from "./remove";
import menuPage from "./menu";
import about from "./about"

function webPage () {
    const menuBtn = document.querySelector("#menupage");
    const homeBtn = document.querySelector("#homepage");
    const aboutBtn = document.querySelector("#aboutpage");
    const body = document.querySelector("body");

    body.style.backgroundColor = "#c14343";
    body.style.height = "100vh";
    body.style.margin = "0";
    initialPage();

    homeBtn.addEventListener("click", () => {
        removeContent()
        initialPage()
    })

    menuBtn.addEventListener("click", () => {
        removeContent()
        menuPage()
    })

    aboutBtn.addEventListener("click", () => {
        removeContent()
        about()
    })
}

webPage()