//functions on setup

// var xd = document.getElementsByTagName('html');
window.onbeforeunload = function () {
  // document.getElementsByTagName('html').style.scroll-behavior = auto;
  window.scrollTo(0, 0);
}

//invocations
// window.onscroll = function() {
//   console.log('hi');
  
// };
// window.addEventListener('scroll', shadowfax.castShadow("nameDiv_header", "nameDiv_img_1"));
// window.addEventListener('scroll', console.log('hello'));
// window.addEventListener('resize',copySize("#nameDiv_header h1", "#nameDiv_header #rectangle") );
// window.addEventListener('resize', shadowfax.castShadow("nameDiv_header", "nameDiv_img_1"));

window.onscroll = function(event) {
  shadowfax.castShadow("nameDiv_header", "nameDiv_img_1");
  button.showButton();
  // console.log
};

window.onresize = function(event) {
  copySize("#nameDiv_header h1", "#nameDiv_header #rectangle");
  shadowfax.castShadow("nameDiv_header", "nameDiv_img_1");
  changeBackground();
  console.log('bye');
  // console.log
};
//-----------------------------------------------------------------------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------------------------------------------------------------------

