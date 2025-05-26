const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener('click' , () => {
    navlinks.classList.toggle('active');
});

const text ="Hi, I'm Mr  SAJAN KUMAR SHRESTHA ";
const typeText = document.getElementById('typed-text');
let index = 0;
function type(){
    if(index < text.length){
        typeText.textContent += text.charAt(index);
        index++;
        setTimeout(type,150);
    }
}
type();

const projects = [
{
    image : "image/logohacker.gpj.jpg",
    title : "Body Mass Index",
    description : "This project is about to calculate the body mass index(BMI)",
    src: "https://nimadandu.github.io/projectBMI/",
},
{
    image : "image/hacker.j[g.jfif",
    title : " Animated Navbar",
    description : "A responsive navigation bar with smooth animation and",
    src: "https://nimadandu.github.io/projectBMI/",
},
{
image : "image/stock.jpg",
title : " Animated Navbar",
description : "A responsive navigation bar with smooth animation and",
src:"https://nimadandu.github.io/projectBMI/",
},
];
const container = document.getElementById("project-container");
projects.forEach(project=> {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${project.image}" alt = "${project.title}"/>
    <h3> ${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.src}" >View project</a>
    `;
    container.appendChild(card)
});
//service card
const services = [
    {
        Image : "image/khacker.ggg.jfif",
        Title :"service box",
        Description : "This is a service div "
    },
    ];
    const containers = document.getElementById("service-div");
services.forEach(projects=> {

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src = "${projects.Image}" alt = "${projects.title}"/>
    <h3> ${projects.Title}</h3>
    <p>${projects.Description}</p>
    `;
    containers.appendChild(card)
});

//review

const review = [
{
    images : "image/sajan.jpg - Copy.webp",
    titles : " Sajan kumar shrestha",
    descriptions : "Great work! very creative and professional",
},
{
    images : "image/sajan.jpg - Copy.webp",
    titles : " Sagun Babu Adhikari",
    descriptions : "Great work! very creative and professional",
},
{
    images : "image/sajan.jpg - Copy.webp",
    titles : " Nima Dandu sherpa",
    descriptions : "Great work! very creative and professional",
},
];

const review_container = document.getElementById("review_div");
review.forEach(reviews=> {

    const cards = document.createElement("div");
    cards.className = "review-card";
    cards.innerHTML = `
    <img src = "${reviews.images}" alt = "${reviews.titles}"/>
    <h4> ${reviews.titles}</h4>
    <p>${reviews.descriptions}</p>
    `;
    review_container.appendChild(cards)
});