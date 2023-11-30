const el = document.getElementById('scroll-container');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    el.addEventListener('mousedown', (e) => {
      isDown = true;
      el.classList.add('active');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });
  
    el.addEventListener('mouseleave', () => {
      isDown = false;
    });
  
    el.addEventListener('mouseup', () => {
      isDown = false;
    });
  
    el.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX); // remove the * 3 for direct following
      el.scrollLeft = scrollLeft - walk;
    });

    function scrollToStart(elementId) {
      // Get the element by ID
      var element = document.getElementById('scroll-container');
  
      // Check if the element exists
      if (element) {
          // Smoothly scroll to the start (leftmost position)
          element.scrollTo({
              left: 0, // Scroll to the start (0 position horizontally)
              behavior: 'smooth' // Enable smooth scrolling
          });
      } else {
          console.error('Element not found with ID:', elementId);
      }
  }

function showFull(src) {
  var fullImg = document.getElementById('fullImg').src = src;
  var preview = document.getElementsByClassName('preview');  
  preview[0].style.display = 'block';     
}

function hideFull() {
  var preview = document.getElementsByClassName('preview');  
  preview[0].style.display = 'none';     
}
