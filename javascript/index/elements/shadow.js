
//class definitions

copySize("#nameDiv_header h1", "#nameDiv_header #rectangle");

//moves shadow element corresponding to scroll position and max dimensions
class Shadow {
  constructor(shadow, dimensions) {
    this.displacement = document.querySelector(shadow);
    this.dimensions = dimensions;
  }

  castShadow(wrapper1, wrapper2) {

    var scrollPos = window.scrollY + vh(90);
  
    var percentOffset = (scrollPos - this.dimensions.minOffset) / (this.dimensions.maxOffset - this.dimensions.minOffset);
  
    console.log(percentOffset);
    // console.log(percentOffset);
    if(percentOffset >= -1 || percentOffset <= 2)
    {
      percentOffset = Math.max(0, percentOffset);
      percentOffset = Math.min(1, percentOffset);
    
      this.displacement.style.marginTop = `${(-0.5*height + percentOffset * -1*height)}px` ;
      
    
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

//instantiations 
const nameDiv = new DivDimensions("nameDiv");
const shadowfax = new Shadow("#rectangle", nameDiv);