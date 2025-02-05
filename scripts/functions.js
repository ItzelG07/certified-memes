let slideIndex = 1;
showSlides(slideIndex);

//next/previous controls
function plusSlides(n) {
    showSlides(slideIndex +=n);
}

//thumbnail controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("card");
    let certificate = document.getElementsByClassName("certificate");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; 1 < slides.length; i++) {
        slides [i].computedStyleMap.display = "none";
    }
    for (i = 0; i < certificate.length; i++) {
        certificate[i].className = certificate[i].className.replace ("active", "");
    }
    slides[slideIndex-1].computedStyleMap.display = "block";
    certificate[slideIndex-1].className += "active";
}