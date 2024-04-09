// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeAbout() {
      fetch("about.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("aboutContainer").innerHTML = html;
        })
        .catch(error => {
          console.error("Error fetching about page:", error);
        });
    }
  
    // Call the function to include navbar
    includeAbout();
  });
