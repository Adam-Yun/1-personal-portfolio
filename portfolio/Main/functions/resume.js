// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeResume() {
      fetch("resume.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("resumeContainer").innerHTML = html;
        })
        .catch(error => {
          console.error("Error fetching resume page:", error);
        });
    }
  
    // Call the function to include navbar
    includeResume();
  });
