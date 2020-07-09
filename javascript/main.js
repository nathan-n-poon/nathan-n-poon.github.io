// import * as indexClasses from 'indexClasses.js'

//functions on setup
copySize("#div2_header h1", "#div2_header #rectangle");
if(window.mobileCheck) {
  var all = document.getElementsByClassName('someClass');
  for (var i = 0; i < all.length; i++) {
    all[i].style.height = '1000px';
  }
  alert("you are on mobile!");
}

//class definitions

//defines behaviour for a scroll to top button
class Button {
  
  constructor(id) {
    this.mybutton = document.getElementById(id);
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

//returns the top and bottom coordinates for a vertical (main) div
class DivDimensions {
  constructor(min, max) {
    this.numberOfDivs = document.querySelectorAll("body .vertical_flex").length;
    this.min = min;
    this.max = max;
  }
  get minOffset() {
    this.divHeight = (window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)) / this.numberOfDivs;
    return this.min * this.divHeight;
  }
  get maxOffset() {
    this.divHeight = (window.scrollMaxY || (document.documentElement.scrollHeight - document.documentElement.clientHeight)) / this.numberOfDivs;
    return this.max * this.divHeight;
  }
}

//moves shadow element corresponding to scroll position and max dimensions
class Shadow {
  constructor(shadow, dimensions) {
    this.displacement = document.querySelector(shadow);
    this.dimensions = dimensions;
  }

  castShadow(wrapper1, wrapper2) {

    var scrollPos = window.scrollY;
  
    var percentOffset = (scrollPos - this.dimensions.minOffset) / (this.dimensions.maxOffset - this.dimensions.minOffset);
  
    if(percentOffset >= 0 || percentOffset <= 1)
    {
      percentOffset = Math.max(0, percentOffset);
      percentOffset = Math.min(1, percentOffset);
    
      this.displacement.style.marginTop = `${(-0.9*height + percentOffset * -1*height/0.8)}px` ;
    
      if(detectWrap(wrapper1, wrapper2)) 
      {
        this.displacement.style.marginLeft = '4%';
      }
      else {
        this.displacement.style.marginLeft = '-2%';
      }
    }
  }
  
}

class doge {}

//helper functions
//gets size of jango and copies dimensions over to boba
function copySize(jango, boba) {
  width = 1*document.querySelector(jango).offsetWidth;
  height = 1*document.querySelector(jango).offsetHeight;
  var select=document.querySelector(boba);
  select.style.width = `${width}px`;
  select.style.height = `${height}px`;
}

//detects when two elements of a horizontal div are no longer in line with each other
//todo: given a div with arbitrary elements and orientation, detect wrapping
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

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function changeBackground() {
  if(vw(100) <= 500) {
    poot = document.getElementById("div1_cover");
    poot.src = "images/index/trees.jpg";
    poot.setAttribute('style', 'width: 500px');
    spencer = document.getElementById("div1_text");
    spencer.setAttribute('style', 'color: white');
    // poot.src = "images/index/moon.jpg";
    // poot.min-width = "450px";
  }
  else {
    poot = document.getElementById("div1_cover");
    poot.src = "images/index/clouds.jpg";
    poot.setAttribute('style', 'height: max(100vh,500px); border-radius: 0px; pointer-events: none; position: absolute; z-index: -1; width: max(100vw, 955px);');
    spencer = document.getElementById("div1_text");
    spencer.setAttribute('style', 'color: black');
  }
}

window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

//instantiations
const button = new Button("myBtn"); 
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
  changeBackground();
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------

