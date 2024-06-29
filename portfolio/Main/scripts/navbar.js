// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeNavbar() {
      fetch("z-navbar.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("navbarContainer").innerHTML = html;
          checkIconClicked()
        })
        .catch(error => {
          console.error("Error fetching project page:", error);
        });
    }
    
    function checkIconClicked(){
        let checkIcon = true

        document.getElementById('check-icon').addEventListener('click', function() {
            console.log(checkIcon)
            const mainView = document.getElementById('mainView')
            const mobileMainNavLink = document.getElementById('mobileMainNavLink')
            if (checkIcon){
                mainView.style.display = 'none'
                mobileMainNavLink.style.display = 'flex'
                checkIcon = false
            }
            else{
                mainView.style.display = 'flex'
                mobileMainNavLink.style.display = 'none'
                checkIcon = true
            }
        })
    }

    // Call the function to include navbar
    includeNavbar();
  });
