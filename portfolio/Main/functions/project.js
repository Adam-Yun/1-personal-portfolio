// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeProject() {
      fetch("project.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("projectContainer").innerHTML = html;
        })
        .catch(error => {
          console.error("Error fetching project page:", error);
        });
    }
  
    // Call the function to include navbar
    includeProject();
  });
