export default function initialPage () {
    const parent = document.querySelector("#content");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const para = document.createElement("p");
    const h1 = document.createElement("h1");
    const parentDiv = document.createElement("div");

    div.classList.add("text-container");
    parentDiv.classList.add("content-container")
    img.src = "../src/assets/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg";
    img.style.width = "700px";
    parentDiv.style.display = "flex";
    parentDiv.style.flexDirection = "column";
    parentDiv.style.alignItems = "center";

    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems = "center";

    para.style.textAlign = "center";
    para.style.width = "700px";

    h1.textContent = "Welcome to Pizzarrhea!";
    para.textContent = `Welcome to Pizzarrhea! We're absolutely crazy about pizza! You must be crazy about pizza too
    or else you would eat something inferior, like tacos or baby food! Not only that, if you couldn't tell by this sentence,
     we're big fans of exclamation points! Or is it
    exclamation marks?! Regardless, come on down and grab a slice of pizza!
    Always remember: We make a pizza from Pizzarrhea turn into a different type of 'rrhea!`;

    div.appendChild(h1);
    div.appendChild(para);
    parentDiv.appendChild(img);
    parentDiv.appendChild(div);
    parent.appendChild(parentDiv);
}