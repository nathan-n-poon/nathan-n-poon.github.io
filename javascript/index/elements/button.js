//defines behaviour for a scroll to top button
//why is it a class? idk...
class Button {
  
    constructor(id) {
      this.mybutton = document.getElementById(id);
    }
  
    // When the user scrolls down 20px from the top of the document, show the button
    showButton() {
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

  function scrollFunction(scrollElement) {
    document.querySelector(scrollElement).scrollIntoView({ 
      behavior: 'smooth' 
    });
  }

  const button = new Button("myBtn");

  
//   window.onscroll = function(event) {
//     button.showButton();
//     // console.log
//   };