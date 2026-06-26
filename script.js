let home = document.getElementById("home-page");
let about = document.getElementById("about-page");
let project = document.getElementById("project-page");
let contact = document.getElementById("contact-page");
let skill = document.getElementById("skill-page");

function homeBut(){
    home.style.display = "block";
    about.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none";
    skill.style.display = "none";
}

function aboutBut(){
    about.style.display = "block";
    home.style.display = "none";
    project.style.display = "none";
    contact.style.display = "none";
    skill.style.display = "none";
}

function projectBut(){
    project.style.display = "block";
    contact.style.display = "none";
    about.style.display = "none";
    home.style.display = "none";
    skill.style.display = "none";
}

function contactBut(){
    contact.style.display = "block";
    about.style.display = "none";
    home.style.display = "none";
    project.style.display = "none";
    skill.style.display = "none";
}

function skillBut(){
    skill.style.display = "block";
    contact.style.display = "none";
    about.style.display = "none";
    home.style.display = "none";
    project.style.display = "none";
}
