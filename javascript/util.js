
function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }
  
  function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }

  //returns the top and bottom coordinates for a vertical (main) div
class DivDimensions {
    constructor(divID) {
      var elem = document.getElementById(divID).getBoundingClientRect();
      this.min = elem.top;
      this.max = elem.bottom;
    }
    get minOffset() {
      return this.min;
    }
    get maxOffset() {
      return this.max;
    }
  }