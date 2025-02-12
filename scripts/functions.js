//typewriter effect
function typeWriter(text,index) {
  if (index < text.length) {
    document.getElementById("output").innerHTML += text.charAt(index);
    setTimeout(function () {
      //call back to the function recursively
      typeWriter(text, index + 1);
    }, 150) //typing delay
  }
}
let text = "JS Certificate Exercise";
typeWriter(text,0);

//slideshow scroll through
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";  
  dots[slideIndex - 1].className += " active";

  //link print button to certificate pages
  printButtonLink();
}

//updating the print button link to the corresponding slide
function printButtonLink() {
  let slides = document.getElementsByClassName("mySlides");
  let currentSlide = slides[slideIndex - 1];
  let printButton = document.getElementById("printButton");

  // html file links
  let link = currentSlide.getAttribute("data-link");

  // redirect to the certificate link
  printButton.onclick = function () {
    window.location.href = link;
  };
}

printButtonLink();