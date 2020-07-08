// var declaration
//for scrollFunction()

// for castShadow()
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

class DivDimensions {
  constructor(min, max) {
    this.numberOfDivs = document.querySelectorAll("body .vertical_flex").length;
    this.divHeight = (window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)) / this.numberOfDivs;
    this.min = min;
    this.max = max;
  }
  get minOffset() {
    return this.min * this.divHeight;
  }
  get maxOffset() {
    return this.max * this.divHeight;
  }
}

class Shadow {
  constructor(shadow, dimensions) {
    this.displacement = document.querySelector(shadow);
    this.dimensions = dimensions;
  }

  castShadow(wrapper1, wrapper2) {

    var scrollPos = window.scrollY;
  
    var percentOffset = (scrollPos - this.dimensions.minOffset) / (this.dimensions.maxOffset - this.dimensions.minOffset);
  
    percentOffset = Math.max(0, percentOffset);
    percentOffset = Math.min(100, percentOffset);
  
    this.displacement.style.marginTop = `${(-0.9*height + percentOffset * -1*height/1.5)}px` ;
  
    if(detectWrap(wrapper1, wrapper2)) 
    {
      this.displacement.style.marginLeft = '4%';
    }
    else {
      this.displacement.style.marginLeft = '-2%';
    }
  }
  
}

const button = new Button(); 
const divTwoDimensions = new DivDimensions(1,2);
const shadowfax = new Shadow("#rectangle", divTwoDimensions);

//invocations
window.onscroll = function() {
  button.scrollFunction();
  shadowfax.castShadow("div2_header", "div2_img_1");
};
window.onresize = function(event) {
  copySize("#div2_header h1", "#div2_header #rectangle");
  shadowfax.castShadow("div2_header", "div2_img_1");
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

function doge() {}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------

