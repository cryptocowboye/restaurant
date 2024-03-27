export default function menuPage () {
    const parent = document.querySelector("#content");
    const divs = [document.createElement("div"),document.createElement("div"),document.createElement("div")]
    const h2s = [document.createElement("h2"),document.createElement("h2"),document.createElement("h2")]
    const imgs = [document.createElement("img"),document.createElement("img"),document.createElement("img")]

    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add("menu-item")
    }

    h2s[0].textContent = "Pizza";
    h2s[1].textContent = "Spaghetti";
    h2s[2].textContent = "Casu Marzu (Maggot Cheese!)"

    imgs[0].src = "../src/assets/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg"
    imgs[1].src = "../src/assets/spaghetti.jpg"
    imgs[2].src = "../src/assets/casu-marzu.jpg"

    for (let k = 0; k < divs.length; k++) {
        imgs[k].style.width = "700px"

        divs[k].style.display = "flex"
        divs[k].style.flexDirection = "column"
        divs[k].style.alignItems = "center"

        divs[k].appendChild(h2s[k])
        divs[k].appendChild(imgs[k])
        parent.appendChild(divs[k])
    }
}