// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeNavbar() {
      fetch("Main/navbar.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("navbarContainer").innerHTML = html;
        })
        .catch(error => {
          console.error("Error fetching navbar:", error);
        });
    }
  
    // Call the function to include navbar
    includeNavbar();
  });

// Function to check screen width and set justify-content property
function adjustJustifyContent() {
    // Get the screen width
    const screenWidth = window.innerWidth;

    // Select the .main-option-ctn ul element
    const ulElement = document.querySelector('.main-option-ctn ul');
    const mainContentCtnElements = document.querySelectorAll(".main-content-ctn > *")

    // If screen width is 999px or less, set justify-content to 'start'
    if (screenWidth <= 999) {
        ulElement.style.justifyContent = 'start';
        ulElement.style.alignItems = 'center';
        mainContentCtnElements.forEach(item => {
            item.style.justifyContent = 'center'
            item.style.margin = '0px 0px 0px 0px'
        });
    } else {
        // Reset justify-content to default value if screen width is greater than 999px
        ulElement.style.justifyContent = 'center';
        ulElement.style.alignItems = 'start';
        mainContentCtnElements.forEach(item => {
            item.style.justifyContent = 'end'
            item.style.margin = '0px 100px 0px 0px'
        });
    }
}

// Initial adjustment on page load
adjustJustifyContent();

// Add event listener for window resize event
window.addEventListener('resize', adjustJustifyContent);
