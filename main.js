window.addEventListener('load', function() {
  // Hide the loading screen
  var loadingScreen = document.querySelector('.loading-screen');
  loadingScreen.style.display = 'none';

  // Show the content area
  var content = document.querySelector('.content');
  content.style.display = 'block';
});

window.addEventListener('beforeunload', function(event) {
      event.preventDefault();
      event.returnValue = ''; // This line is necessary for some older browsers
      return 'Are you sure you want to leave this page?'; // Custom warning message
    });
