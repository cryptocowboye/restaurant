export default function about () {
    const parent = document.querySelector("#content");
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const para = document.createElement("p");

    div.classList.add("about-text-content");

    div.style.display = "flex"
    div.style.flexDirection = "column"
    div.style.alignItems = "center"

    para.style.textAlign = "center"
    para.style.width = "500px"

    h1.textContent = `About us`
    para.textContent = `We are Pizzarrhea, one of the top notch pizzarias in town! However, we're more than that... 
    We are a family, and one of the core values that we instill in all of our employees is 
    a love for pizza! Not only that, but a love for spaghetti and Maggot Cheese (we believe it will catch on)!
    Patrons are always welcome to enjoy the love we put into crafting top tear pizza pies, day in and day out!
    If you don't believe us, go to the menu page and we guarantee that you will salivate!`

    div.appendChild(h1);
    div.appendChild(para);
    parent.appendChild(div)
}