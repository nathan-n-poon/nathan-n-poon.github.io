//functions on setup and invocations for events: scroll and resize

// var ua = window.navigator.userAgent;
//     var msie = ua.indexOf("MSIE ");

//     if (msie > 0) // If Internet Explorer, return version number
//     {
//       document.querySelector('html').innerHTML = 'I dont support IE sorry';
//     }

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

if(window.document.documentMode)
{
  document.querySelector('html').innerHTML = 'I dont support IE sorry';
}