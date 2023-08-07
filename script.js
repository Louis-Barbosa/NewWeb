// Variables
let bodyElement = document.body;
let navElement = document.querySelector('nav');
let pElement = document.querySelector('.content p');
let interactElements = document.getElementById('interact');
let squareElement = document.querySelector('.square');
let navLinks = document.querySelectorAll('nav a');
let image1Element = document.getElementById('image1');
let image2Element = document.getElementById('image2');
image2Element.style.display = "none";
let img3 = document.getElementById("Funny");
img3.style.display = "none";

navElement.style.fontFamily = "Arial, sans-serif";
navElement.style.fontSize = "18px";
pElement.style.fontFamily = "Arial, sans-serif";
pElement.textContent = "I am Louis Barbosa, a passionate and aspiring software developer! Currently, I am enrolled as a student at the esteemed Bronx High School of Science, where my love for coding and the environment has taken root. As I embark on this exciting journey of personal growth and education, my ultimate goal is to make a significant and positive impact on the world. This website serves as a platform for any inquiries you may have about me or to get in touch with me directly.";

squareElement.addEventListener('click', () => {
  if (bodyElement.style.backgroundColor === "rgb(242, 245, 234)") {
    // Code to execute when switching to dark mode
    bodyElement.style.backgroundColor = "#2C363F";
    bodyElement.style.color = "#F2F5EA";
    navElement.style.backgroundColor = "#2C363F";
    navElement.style.color = "#F2F5EA";
    squareElement.style.backgroundColor = "#e75a7c";
    squareElement.style.borderColor = "#e75a7c";
    pElement.style.color = "#F2F5EA";
    navLinks.forEach(navLink => {
      navLink.style.color = "#F2F5EA";
    });
    image2Element.style.display = "none";
    image1Element.style.display = "block";
    img3.style.display="none";

    image2Element.addEventListener('click', () => {
        // Replace image2Element with img3
        image2Element.style.display = "none";
        img3.style.display = "block";
      }); 

  } else {
    // Code to execute when switching to light mode
    bodyElement.style.backgroundColor = "#F2F5EA";
    bodyElement.style.color = "#2C363F";
    navElement.style.backgroundColor = "#2C363F";
    navElement.style.color = "#2C363F";
    squareElement.style.backgroundColor = "#2C363F";
    squareElement.style.borderColor = "#F2F5EA";
    pElement.style.color = "#2C363F";
    navLinks.forEach(navLink => {
      navLink.style.color = "#2C363F";
    });
    image2Element.style.display = "block";
    image1Element.style.display = "none";
    img3.style.display="none";
  }
});

image1Element.addEventListener('click', () => {
    // Replace image2Element with img3
    image1Element.style.display = "none";
    img3.style.display = "block";
  }); 

// New event listener for image2Element


