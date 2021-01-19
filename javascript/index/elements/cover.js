//a temporary display covering the slideshow section that goes away in a short while. 
//is regenrated after slideshow area is offscreen for a while

fadeThreshhold = false;
inDiv = false;
timer = 0;
cooldown = false;
const dimensions = new DivDimensions("slideshow_wrapper");

//tells us if we are viewing the slideshow vertical area
function aboveOrBelowDiv() {
  
  if(window.scrollY + vh(50) > dimensions.minOffset + vh(5) && window.scrollY + vh(50)  < dimensions.maxOffset - vh(5)) {
    fadeThreshhold = true;
  }
  else {
    fadeThreshhold = false;
  }

  if(window.scrollY + vh(100) > dimensions.minOffset && window.scrollY < dimensions.maxOffset) {
    inDiv = true;
  }
  else {
    inDiv = false;
  }
}

// countdows the regenration timer
setInterval(function() {
  if(Math.round(timer) > 0 && !fadeThreshhold) {
    timer -= 1;
    cooldown = false;
  }
  if(Math.max(0,Math.round(timer)) == 0) {
    cooldown = true;
  }
  // console.log("why");
}, 10);

//invoke the cooldown and disappear functions
setInterval(function() { if(!window.mobileCheck()) {aboveOrBelowDiv()}}, 10);
setInterval(function() { if(!window.mobileCheck()) {cover()}}, 10);
if(window.mobileCheck()) {  
  var myobj = document.getElementById("slideshow_cover");
  myobj.remove();
}

//controls the display of the cover 
function cover() {
  // console.log("morgan");
  if (fadeThreshhold) {
    document.getElementById("slideshow_cover").style.opacity = 0;
    document.getElementById("slideshow_cover").style.zIndex = 0;
    timer = 150;
    // setTimeout(function(){ document.getElementById("slideshow_cover").style.opacity = 1; }, 3000);
    // document.getElementById("slideshow_cover").style.opacity = 1;
  }
  else if(!inDiv && cooldown) {
    document.getElementById("slideshow_cover").style.opacity = 1;
    document.getElementById("slideshow_cover").style.zIndex = 99999;
    // console.log("poot");
  }
}