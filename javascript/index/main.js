//functions on setup and invocations for events: scroll and resize

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

window.onscroll = function(event) {
  shadowfax.castShadow("nameDiv_header", "nameDiv_img_1");
  button.showButton();
};

window.onresize = function(event) {
  copySize("#nameDiv_header h1", "#nameDiv_header #rectangle");
  shadowfax.castShadow("nameDiv_header", "nameDiv_img_1");
  changeBackground();
  console.log('bye');
};