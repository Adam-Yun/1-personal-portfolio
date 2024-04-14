// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeNavbar() {
      fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("navbarContainer").innerHTML = html;
          buttonClick();
          changeButtonStateToPressed()
        })
        .catch(error => {
          console.error("Error fetching navbar:", error);
        });
    }

    // Private variable
    let buttonPressed = 'None';

    // Function to know what button is clicked
    function buttonClick() {
      const homeButton = document.getElementById("homeButton");
      if(homeButton){
        homeButton.addEventListener('click', function() {
          console.log("Home Button Clicked")
          buttonPressed = 'homeButton'
          console.log(buttonPressed)
        });
      }
      else{
        console.error('Home Button Not Found!')
      }

      const projectButton = document.getElementById("projectButton");
      if(projectButton){
        projectButton.addEventListener('click', function() {
          console.log("Project Button Clicked")
          buttonPressed = 'projectButton'
          console.log(buttonPressed)
        });
      }
      else{
        console.error('Project Button Not Found!')
      }

      const aboutButton = document.getElementById("aboutButton");
      if(aboutButton){
        aboutButton.addEventListener('click', function() {
          console.log("About Button Clicked")
          buttonPressed = 'aboutButton'
          console.log(buttonPressed)
        });
      }
      else{
        console.error('About Button Not Found!')
      }

      const resumeButton = document.getElementById("resumeButton");
      if(resumeButton){
        resumeButton.addEventListener('click', function() {
          console.log("Resume Button Clicked")
          buttonPressed = 'resumeButton'
          console.log(buttonPressed)
        });
      }
      else{
        console.error('Resume Button Not Found!')
      }
    }
    
    function changeButtonStateToPressed(){
      // This gets the entire element button and grabs all existing ones in the html
      // To print just button id do buttons.id
      const buttons = document.querySelectorAll('button')

      // Reset all button colors to grey
      // buttons.forEach(button => {
      //   console.log('Buttons Color Reset')
      //   button.classList.remove('pushable-green')
      //   button.classList.remove('front-green')
      //   button.classList.add('pushable')
      //   button.classList.add('front')
      // });

      const element = document.getElementById(buttonPressed);
      // element.classList.remove()
      console.log(buttons)
    }

    // Call the function to include navbar
    includeNavbar();
  });
