//changes the background image and text colour of welcome window
// if on mobile or window resize on desktop
function changeBackground() {
    if(vw(100) <= 500 || window.mobileCheck()) {

      poot = document.getElementById("welcomeDiv_cover");
      poot.src = "images/index/trees.jpg";
      console.log('hello')
      if(!window.mobileCheck())
      {
          poot.setAttribute('style', 'width: 500px ');
      }
      if(window.mobileCheck()) 
      {
          poot.setAttribute('style', 'width: 100vw');
      }

      spencer = document.getElementById("welcomeDiv_text");
      spencer.style.color = "white";
      spencer.style.zIndex = 10;

      var toChange = document.getElementById("welcomeDiv").querySelectorAll("p");
      document.querySelector("nav").setAttribute('style', 'border-color: white');
      for (i = 0; i < toChange.length; i++)
      {
          toChange[i].style.color = "white";
          baseColour = 'white';
          // toChange[i].
      }
      document.getElementById('welcomeDiv_message').style.backgroundColor =  "black";
    }
    else {
      poot = document.getElementById("welcomeDiv_cover");
      poot.src = "images/index/clouds.jpg";
      poot.setAttribute('style', 'height: max(100vh,500px); border-radius: 0px; pointer-events: none; position: absolute; z-index: -1; width: max(100vw, 955px);');
      
      spencer = document.getElementById("welcomeDiv_text");
      spencer.setAttribute('style', 'color: black');

      var toChange = document.getElementById("welcomeDiv").querySelectorAll("p");
      document.querySelector("nav").setAttribute('style', 'border-color: black');
      for (i = 0; i < toChange.length; i++)
      {
        toChange[i].style.color = "black";
        baseColour = 'black';
      }
      document.getElementById('welcomeDiv_message').style.backgroundColor =  "transparent";
    }
  }

  changeBackground();

//   window.onresize = function(event) {
//     changeBackground();
//     // console.log
//   };