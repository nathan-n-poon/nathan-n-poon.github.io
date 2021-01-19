Number.prototype.mod = function(b) {
    // Calculate
    return ((this % b) + b) % b;
  }
  
  !(function(d){
    // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
    var items = d.querySelectorAll(".my_slides");
    const totalItems = items.length;
    var  slide = 0;
    var  moving = true; 
    const inactiveSlide = "inactive_slide";
  
    minHeight = items[0].scrollHeight;
    for(i in items) {
      if(i.scrollHeight < minHeight)
      {
        minHeight = i.scrollHeight;
      }
    }
  
    function setMinHeights() {
      document.documentElement.style.setProperty('--min-slideshow-height', `${minHeight}px`);
    }
  
    function setEventListeners() {
      var next = d.getElementById('slideshow_button--next'),
          prev = d.getElementById('slideshow_button--previous');
  
      next.addEventListener('click', moveNext);
      prev.addEventListener('click', movePrev);
    }
  
    function moveCarouselTo(slide) {
  
      // Check if carousel is moving, if not, allow interaction
      if(!moving) {
  
        // temporarily disable interactivity
        moving = true;
  
        setTimeout(function(){
          moving = false
        }, 500);
  
        // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
        var slide = slide.mod(totalItems),
            newPrevious = (slide - 1).mod(totalItems),
            newNext = (slide + 1).mod(totalItems),
            oldPrevious = (slide - 2).mod(totalItems),
            oldNext = (slide + 2).mod(totalItems);
  
          items[oldPrevious].className = inactiveSlide;
          items[oldNext].className = inactiveSlide;
  
          // Add the new classes
          items[newPrevious].className = inactiveSlide + " previous";
          items[slide].className = "vertical_flex my_slides active";
          items[newNext].className = inactiveSlide + " next";
          setMinHeights();
        // }
      }
    }
  
    function moveNext() {
      if (!moving) {
        slide++;
        moveCarouselTo(slide);
      }
    }
  
    function movePrev() {
      if (!moving) {
        slide--;
        moveCarouselTo(slide);
      }
    }
  
    setEventListeners();
    moving = false;
    moveCarouselTo(0);
  
  }(document));

  
x = new DivDimensions('slideshow_wrapper');
document.documentElement.style.setProperty('--deleteMargin', `${x.minOffset}px`);