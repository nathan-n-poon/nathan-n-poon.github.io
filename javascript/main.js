mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo(
      {
          top: 0,
          behavior: "smooth"
      }
  );
}

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

const min = vw(10);
const max =  vw(20);
const showMeTheMorty = document.getElementById('showMeTheMorty');
while (true)
{
  setInterval(vary(showMeTheMorty, min, max), 10000);
}

function vary(showMeTheMorty, min, max) {
  console.log(showMeTheMorty);
  var delta = 5 * Math.random();
  var direction = Math.random > 0.5 ? -1 : 1;
  var size = showMeTheMorty.style.size;
  if (direction*delta + size > max || direction*delta + size < min)
  {
    direction *= -1;
  }
  showMeTheMorty.style.size += direction * delta;
}