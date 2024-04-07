// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeNavbar() {
      fetch("navbar.html")
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
