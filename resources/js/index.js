var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var captions = document.getElementsByClassName("caption");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
      dots[i].className = dots[i].className.replace(" active", "");
      captions[i].className = captions[i].className.replace(" active-caption", " inactive-caption")
  }
  // for (i = 0; i < dots.length; i++) {
  //     console.log(dots[i].className)
      
  //     console.log(dots[i].className)
  // }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
  captions[slideIndex-1].className += " active-caption";

}

async function fetchAsync (url) {
  let response = await fetch(url, {mode: 'no-cors', });
  let data = await response.json();
  return data;
}

async function openURL (url) {
  window.location.href = url;
}

