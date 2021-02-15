loadPhotos()
const gallery = document.querySelector("#slider-container");
const images = document.querySelectorAll(".slide-container img");

const prev = document.querySelector("#previous");
const next = document.querySelector("#next");

//load the photos

// index and slide width
let counter = 1;
const widthSlide = 400;

next.addEventListener('click', () => {
    gallery.style.trasition="transform 0.5s ease";
    counter++;
    gallery.style.transform="translateX(" + (-widthSlide * counter) + "px";
});

prev.addEventListener('click', () => {
    gallery.style.trasition="transform 0.5s ease";
    counter--;
    gallery.style.transform="translateX(" + (widthSlide * counter) + "px";
});


// gallery.style.transform = "translateX(" + (widthSlide * counter) + "px";
// Loads 30 photos from lorem picsum api

function loadPhotos() {
    fetch("https://picsum.photos/v2/list")
    .then(x => {return x.json();})
    .then(x => {x.forEach(photo => {
        console.log(photo.width)
        gallery.innerHTML += `
            <img src="${photo.download_url}" alt="">
        `
    });})
}