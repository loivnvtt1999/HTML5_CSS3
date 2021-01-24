
// W3C
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20) {
    document.getElementById("myBtn1").style.display = "block";
  } else {
    document.getElementById("myBtn1").style.display = "block";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
	var slideIndex;
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      
      slideIndex++;
  
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      
      setTimeout(showSlides, 3000);
  }
  window.onload=showSlides;
  
  showSlides(slideIndex = 0);
 
 window.onload=showSlides();
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
