// Code here!
const firstHoodie = document.querySelector("h3");

firstHoodie.innerText = "Potato";
// Andra ->
document.querySelector("a").innerText = "Start";
document.querySelector("#contact").innerText = "Mail us";
document.querySelector("#fire-hoodie").innerText = "En finfin tröja som dom flesta kommer gilla, tro mig jag har själv en sådan!";
document.querySelector("button").style.backgroundColor = "red";

document.querySelector("figure").style.backgroundColor = "red";
document.querySelector("#adress").innerHTML = "Sinus Skatteboard<br /> Norrabrosvägen 13<br /> 1338 66 Nybro";

document.querySelector("a").classList.add("active");
document.querySelector("img").classList.remove("logo");
document.querySelector("img").addEventListener("click", () => console.log("found you!"));

let allPs = document.querySelectorAll("p");
var i;
for (i = 0; i < allPs.length; i++) {
    allPs[i].style.color = "rgba(102, 6, 6, 0.8)";
}

let allButtons = document.querySelectorAll("button");
var i;
for (i = 0; i < allButtons.length; i++) {
    allButtons[i].innerText = "add to cart";
    allButtons[i].style.width = "8rem";
}
document.querySelector("button").innerText = "Sold out";


let allArticles = document.querySelector("main").querySelectorAll("article");
var i;
for (i = 0; i < allArticles.length; i++) {
    allArticles[i].addEventListener("click", () => console.log("Hi, Im article Fire / Ash / Water"));
}