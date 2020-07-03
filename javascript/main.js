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

getsize();

function getsize() {
  var size = 0;
  // for (var node of document.querySelectorAll('#rectangle')) {
  //   // size  += node.getBoundingClientRect().height;
  //   size += node.clientHeight
  // }
  // document.getElementById('div2').setAttribute("style" , `height: max( ${size}px), 100vh`)

  size = 5*document.querySelector("#div_2_h1 h1").offsetWidth;
  var select=document.querySelector("#div_2_h1 #rectangle");
  select.setAttribute("style", `width: ${size}px`)
  console.log(size);
  console.log(document.querySelector("#div_2_h1 #rectangle").offsetWidth)
}

window.onresize = function(event) {
  getsize();
};
