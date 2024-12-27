const slides = document.querySelectorAll('.slide');
let slideIndex = 0;
const totalSlides = slides.length;

const texts = [
    {
        location: "Travel Blog",
        locationFontSize: "25px", 
        headline: "RAVEL",
        headlineFontSize: "114px", 
        paragraph: "Your go-to travel blog for exploring destinations near and far. Dive into stories, tips, and guides to make your journeys unforgettable.",
        paragraphFontSize: "21px", 
        gradient: "linear-gradient(to left, transparent 10%, rgb(121, 176, 180) 90%)",
        color: "white",
        buttonColor: "rgb(121, 176, 180) ",
        navColor: "rgb(121, 176, 180) "
    },
    {
        location: "Alaminos City, Pangasinan",
        locationFontSize: "25px", 
        headline: "BANAUE RICE TERRACES",
        headlineFontSize: "84px", 
        paragraph: "These ancient, hand-carved terraces are a breathtaking testament to Filipino ingenuity, often called the Eighth Wonder of the World.",
        paragraphFontSize: "22px", 
        gradient: "linear-gradient(to right, transparent, rgba(86, 119, 14, 0.97))",
        color: "white",
        buttonColor: "rgba(72, 95, 21, 0.86)",
        navColor: "#66BF0F"
        
    },
    {
        location: "Capas, Tarlac and Botolan, Zambales",
        locationFontSize: "25px", 
        headline: "MOUNT PINATUBO",
        headlineFontSize: "108px", 
        paragraph: "Famous for its dramatic eruption in 1991, Mt. Pinatubo now attracts visitors with its picturesque crater lake and thrilling trekking routes.",
        paragraphFontSize: "21px", 
        gradient: "linear-gradient(to right, transparent, rgb(127, 115, 47))",
        color: "white",
        buttonColor: "rgb(110, 100, 41)",
        navColor: "#94873D"
    }
];

function updateText() {
    const headline = document.getElementById("headline");
    const paragraph = document.getElementById("paragraph");
    const location = document.getElementById("location");

    location.innerHTML = `${texts[slideIndex].location}`;
    location.style.fontSize = texts[slideIndex].locationFontSize || "default size";
    location.style.fontWeight = "540"; 
    location.style.letterSpacing = "1px"; 

    headline.innerHTML = `${texts[slideIndex].headline} <i class="fa-regular fa-compass"></i>`;
    headline.style.fontSize = texts[slideIndex].headlineFontSize || "default size";

    paragraph.innerText = texts[slideIndex].paragraph;
    paragraph.style.fontSize = texts[slideIndex].paragraphFontSize || "default size";

    setGradient(texts[slideIndex].gradient);

    const textColor = texts[slideIndex].color;
    headline.style.color = textColor;
    paragraph.style.color = textColor;
    location.style.color = textColor;

    const buttonColor = texts[slideIndex].buttonColor;
    const buttons = document.querySelectorAll('.hbtnc button');
    buttons.forEach(button => {
        button.style.color = buttonColor;
    });

    const navColor = texts[slideIndex].navColor;
    document.querySelector('.hlogo a').style.color = navColor;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.style.color = navColor;
    });

    headline.style.animation = paragraph.style.animation = location.style.animation = 'none';
    void headline.offsetWidth; 
    headline.style.animation = paragraph.style.animation = location.style.animation = 'fadeInFromTop 1s ease-out forwards';
}




function setGradient(gradient) {
    const htext = document.getElementById('htext');

    htext.style.transition = 'background 0.5s ease'; 
    htext.style.background = `${gradient}, rgba(0, 0, 0, 0.6)`;  

    setTimeout(() => {
        htext.style.transition = 'background 1s ease'; 
        htext.style.background = `${gradient}, rgba(0, 0, 0, 0)`; 
    }, 500); 
}

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    if (index < 0) slideIndex = totalSlides - 1;

    const slideContainer = document.querySelector('.slides');
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

    updateText();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
    menuList.style.maxHeight = menuList.style.maxHeight === "0px" ? "100vh" : "0px";
}

function explore() {
    window.location.href = texts[slideIndex].link; 
}


const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("atxt");
const form = document.getElementById("form");

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const message = document.getElementById('atxt');

    [username, email, message].forEach(input => {
        input.style.border = '';
        input.placeholder = ''; 
    });

    let isValid = true;

    if (username.value.trim() === '') {
        username.style.border = '3px solid red';
        username.placeholder = 'Name is required!';
        isValid = false;
    }

    if (email.value.trim() === '') {
        email.style.border = '3px solid red';
        email.placeholder = 'Email is required!';
        isValid = false;
    }

    if (message.value.trim() === '') {
        message.style.border = '3px solid red';
        message.placeholder = 'Message is required!';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
});