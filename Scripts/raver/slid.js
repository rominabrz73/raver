

  	$(window).on("change load resize", function myFunction() {
var slideIndex = 1;
showSlides(slideIndex);
redshowSlides(slideIndex);
parallex() ;
	
	});


var slideIndex = 1;
showSlides(slideIndex);
setInterval(plusSlides, 8000, -1);
function plusSlides(n) {
  showSlides(slideIndex += n);

}


function currentSlide(n) {
  showSlides(slideIndex = n);}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
  
}