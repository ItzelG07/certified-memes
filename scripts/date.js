const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; // (0-base, so add 1)
let year = date.getFullYear(); 


let currentDate = `${month}-${day}-${year}`;


const dateElement = document.querySelector("section.date");


if (dateElement) {
    dateElement.textContent = currentDate;
}

//typewriter effect
function typeWriter(text,index) {
    if (index < text.length) {
      document.getElementById("ctrl-p").innerHTML += text.charAt(index);
      setTimeout(function () {
        //call back to the function recursively
        typeWriter(text, index + 1);
      }, 150) //typing delay
    }
  }
  let text = "Press Ctrl+P to Print";
  typeWriter(text,0);