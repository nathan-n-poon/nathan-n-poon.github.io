function getCurrentRotation(el){
    var st = window.getComputedStyle(el, null);
    var tm = st.getPropertyValue("-webkit-transform") ||
             st.getPropertyValue("-moz-transform") ||
             st.getPropertyValue("-ms-transform") ||
             st.getPropertyValue("-o-transform") ||
             st.getPropertyValue("transform") ||
             "none";
    if (tm != "none") {
      var values = tm.split('(')[1].split(')')[0].split(',');
      /*
      a = values[0];
      b = values[1];
      angle = Math.round(Math.atan2(b,a) * (180/Math.PI));
      */
      //return Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI)); //this would return negative values the OP doesn't wants so it got commented and the next lines of code added
      var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
      return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
    }
    return 0;
  }

  function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }
  
  function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }

function vary(showMeTheMorty, min, max) {
    var angle = getCurrentRotation(showMeTheMorty);
    var width = parseFloat(showMeTheMorty.style.width, 10);
    console.log(`pre ${width}`);
    var delta = 2.5 * Math.random();
    var direction = Math.random() > 0.5 ? -1 : 1;
    if (direction*delta + width > max || direction*delta + width < min)
    {
      direction *= -1;
    }
    showMeTheMorty.style.transform = 'rotate(' + (direction*delta + angle) + 'deg)';
    width += direction * delta;
    console.log(width);
    showMeTheMorty.style.width = (width + "vw");
    console.log(`post ${showMeTheMorty.style.width}`);
  }
  
  const min = 20;
  const max = 50;
  const showMeTheMorty = document.getElementById('showMeTheMorty');
  showMeTheMorty.style.width = ((min+max)/2.0 + "vw");
  console.log(showMeTheMorty.style.width);
  setInterval(function () {vary(showMeTheMorty, min, max)}, 50);