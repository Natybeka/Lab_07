loadPhotos()
const gallery = document.querySelector(".slider-container");
let images ;  

const prev = document.querySelector("#previous");
const next = document.querySelector("#next");

//load the photos

// index and slide width
let counter = 0;
let widthSlide = 500;

next.addEventListener('click', slideNext);
prev.addEventListener('click', slidePrevious);


function slidePrevious(e){
    e.preventDefault();
    if (counter <= 0) {
        counter = 9;
        gallery.style.transform="translateX(" + (-widthSlide * counter) + "px)";
        return
    }
    gallery.style.transition="all 0.4s ease-in-out";
    counter--;
    gallery.style.transform="translateX(" + (-widthSlide * counter) + "px)";
}

function slideNext(e) {
    e.preventDefault()
    console.log("next called");
    if (counter >= 9) {
        counter = 0
        gallery.style.transform="translateX(" + (-widthSlide * counter) + "px)";
        return;
    }
    gallery.style.trasition="all 10s ease-in-out";
    counter++;
    gallery.style.transform="translateX(" + (-widthSlide * counter) + "px)";
}


// gallery.style.transform = "translateX(" + (widthSlide * counter) + "px";
// Loads 30 photos from lorem picsum api

function loadPhotos() {

    for(let i = 0; i < 10; i++) {
        fetch(`https://picsum.photos/500/500?random=${i}`)
        .then(x => {
            
                gallery.innerHTML += `
            <img src="${x.url}" alt="">
            `
        });
    }
}