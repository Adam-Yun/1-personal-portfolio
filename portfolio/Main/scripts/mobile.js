// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeMobile() {
      fetch("z-mobile.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("mobileMainNavLink").innerHTML = html;
        })
        .catch(error => {
          console.error("Error fetching project page:", error);
        });
    }
    
    // Call the function to include navbar
    includeMobile();
  });
