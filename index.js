let scrollToTop = document.getElementById("scroll-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollToTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let time = 2;
document.getElementById("time").innerHTML = 3;
const countdownTime = () => {
  if(time < 0){
    window.clearInterval(time);
    document.getElementById("header").style.transform = "translateX(0)";
    document.getElementById("home").style.transform = "translateX(0)";
    document.getElementById("skills").style.transform = "translateX(0)";
    document.getElementById("projects").style.transform = "translateX(0)";
    document.getElementById("contact-me").style.transform = "translateX(0)";
    document.getElementById("header").style.opacity = "1";
    document.getElementById("home").style.opacity = "1";
    document.getElementById("skills").style.opacity = "1";
    document.getElementById("projects").style.opacity = "1";
    document.getElementById("contact-me").style.opacity = "1";
    document.getElementById("countdown").style.display = "none";
    document.body.style.overflow = "visible"; 
  }else{
    document.getElementById("time").innerHTML = time;
    document.getElementById("header").style.transform = "translateX(200%)";
    document.getElementById("home").style.transform = "translateX(-200%)";
    document.getElementById("skills").style.transform = "translateX(200%)";
    document.getElementById("projects").style.transform = "translateX(-200%)";
    document.getElementById("contact-me").style.transform = "translateX(200%)";
    document.getElementById("header").style.opacity = "0";
    document.getElementById("home").style.opacity = "0";
    document.getElementById("skills").style.opacity = "0";
    document.getElementById("projects").style.opacity = "0";
    document.getElementById("contact-me").style.opacity = "0";
  }
}
window.setInterval(() =>{
  countdownTime()
  time --;
}, 1000)

