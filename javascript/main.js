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

var width = 0;
var height = 0;

getsize();

function getsize() {

  // for (var node of document.querySelectorAll('#rectangle')) {
  //   // size  += node.getBoundingClientRect().height;
  //   size += node.clientHeight
  // }
  // document.getElementById('div2').setAttribute("style" , `height: max( ${size}px), 100vh`)

  width = 1*document.querySelector("#div_2_h1 h1").offsetWidth;
  height = 1*document.querySelector("#div_2_h1 h1").offsetHeight;
  var select=document.querySelector("#div_2_h1 #rectangle");
  select.style.width = `${width}px`;
  select.style.height = `${height}px`;
  
  // ("style", `width: ${width}px; height: ${height}px`)
  // console.log("YEAH");
  // console.log(`nominal width: ${width}`);
  // console.log(`nominal height: ${height}`)
  // console.log(`actual width: ${document.querySelector("#div_2_h1 #rectangle").offsetWidth}`);
  // console.log(`actual height: ${document.querySelector("#div_2_h1 #rectangle").offsetHeight}`);
}

window.onresize = function(event) {
  getsize();
  detectWrap();
  castShadow();
};

detectWrap();

function detectWrap() {
  var h1Centre = document.getElementById("div_2_h1").offsetTop + document.getElementById("div_2_h1").offsetHeight / 2;
  var imgCentre = document.getElementById("div_2_img_1").offsetTop + document.getElementById("div_2_img_1").offsetHeight / 2;
  if (h1Centre/imgCentre > 1.1 || h1Centre/imgCentre < 0.9)
  {
    console.log("pootis");
    document.getElementById("rectangle").style.marginLeft = '4%';
  }
  else 
  {
    document.getElementById("rectangle").style.marginLeft = '-2%';    
  }

}

// var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
//   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );


var numberOfDivs = document.querySelectorAll("body .vertical_flex").length;

// console.log((window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)));
const min = 1;
const max = 2;
const displacement = document.querySelector("#rectangle");
var divHeight = (window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)) / numberOfDivs;
var minOffset = min * divHeight;
var maxOffset = max * divHeight;

function castShadow() {

  var scrollPos = window.scrollY;

  var percentOffset = (scrollPos - minOffset) / (maxOffset - minOffset);

  percentOffset = Math.max(0, percentOffset);
  percentOffset = Math.min(100, percentOffset);

  displacement.style.marginTop = `${(-1.5*height + percentOffset * height/1.5)}px` ;
  // console.log(-12 + percentOffset * 12);
}

window.onscroll = function(event) {
  castShadow();
};



// setInterval(function () {console.log(window.scrollY)}, 2000);
// setInterval(function () {console.log(window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight))}, 3000);