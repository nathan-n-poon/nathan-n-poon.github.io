// var declaration
//for scrollFunction()

// for castShadow()
var numberOfDivs = document.querySelectorAll("body .vertical_flex").length;
const min = 1;
const max = 2;
const displacement = document.querySelector("#rectangle");
var divHeight = (window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)) / numberOfDivs;
var minOffset = min * divHeight;
var maxOffset = max * divHeight;
//for copySize()
var width = 0;
var height = 0;


//functions on setup
copySize("#div2_header h1", "#div2_header #rectangle");

class Button {

  constructor() {
    this.mybutton = document.getElementById("myBtn");
  }

  // When the user scrolls down 20px from the top of the document, show the button
  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.mybutton.style.display = "block";
    } else {
      this.mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth"
      }
    );
  }
}

class Shadow {
  
}

const button = new Button(); 

//invocations
window.onscroll = function() {
  button.scrollFunction();
  castShadow("div2_header", "div2_img_1");
};
window.onresize = function(event) {
  copySize("#div2_header h1", "#div2_header #rectangle");
  castShadow("div2_header", "div2_img_1");
};




//gets size of jango and copies dimensions over to boba
function copySize(jango, boba) {
  width = 1*document.querySelector(jango).offsetWidth;
  height = 1*document.querySelector(jango).offsetHeight;
  var select=document.querySelector(boba);
  select.style.width = `${width}px`;
  select.style.height = `${height}px`;
}

//detects
function detectWrap(item1, item2) {
  var h1Centre = document.getElementById(item1).offsetTop + document.getElementById(item1).offsetHeight / 2;
  var imgCentre = document.getElementById(item2).offsetTop + document.getElementById(item2).offsetHeight / 2;
  if (h1Centre/imgCentre > 1.1 || h1Centre/imgCentre < 0.9)
  {
    return true;
  }
  else 
  {
    return false;
  }

}

function castShadow(wrapper1, wrapper2) {

  var scrollPos = window.scrollY;

  var percentOffset = (scrollPos - minOffset) / (maxOffset - minOffset);

  percentOffset = Math.max(0, percentOffset);
  percentOffset = Math.min(100, percentOffset);

  displacement.style.marginTop = `${(-0.9*height + percentOffset * -1*height/1.5)}px` ;

  if(detectWrap(wrapper1, wrapper2)) 
  {
    displacement.style.marginLeft = '4%';
  }
  else {
    displacement.style.marginLeft = '-2%';
  }
}


function doge() {}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

