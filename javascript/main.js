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

//https://css-tricks.com/flex-grow-is-weird/
//Author: Manuel Matuzovic
//css-tricks.com

// getsize();

// function getsize() {
//   var size = 0;
//   for (var node of document.querySelectorAll('#div2')) {
//     // size  += node.getBoundingClientRect().height;
//     size += node.clientHeight
//   }
//   size =  size * 1.5
//   document.getElementById('div2').setAttribute("style" , `height: max( ${size}px), 100vh`)
//   console.log(size);
// }

// window.onresize = function(event) {
//   getsize();
// };
