// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Function to include navbar
    function includeNavbar() {
      fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("navbarContainer").innerHTML = html;
          buttonClick();
          // changeButtonStateToPressed()
        })
        .catch(error => {
          console.error("Error fetching navbar:", error);
        });
    }

    // // Private variable
    // let buttonPressed = 'None';

    // Function to know what button is clicked
    function buttonClick() {
      const homeButton = document.getElementById("homeButton");
      if(homeButton){
        homeButton.addEventListener('click', function() {
          // console.log("Home Button Clicked")
          buttonPressed = 'homeButton'
          // console.log(buttonPressed)
          changeButtonStateToPressed()
        });
      }
      else{
        console.error('Home Button Not Found!')
      }

      const projectButton = document.getElementById("projectButton");
      if(projectButton){
        projectButton.addEventListener('click', function() {
          // console.log("Project Button Clicked")
          buttonPressed = 'projectButton'
          // console.log(buttonPressed)
          changeButtonStateToPressed()
        });
      }
      else{
        console.error('Project Button Not Found!')
      }

      const aboutButton = document.getElementById("aboutButton");
      if(aboutButton){
        aboutButton.addEventListener('click', function() {
          // console.log("About Button Clicked")
          buttonPressed = 'aboutButton'
          // console.log(buttonPressed)
          changeButtonStateToPressed()
        });
      }
      else{
        console.error('About Button Not Found!')
      }

      const resumeButton = document.getElementById("resumeButton");
      if(resumeButton){
        resumeButton.addEventListener('click', function() {
          // console.log("Resume Button Clicked")
          buttonPressed = 'resumeButton'
          // console.log(buttonPressed)
          changeButtonStateToPressed()
        });
      }
      else{
        console.error('Resume Button Not Found!')
      }
    }
    
    function changeButtonStateToPressed(){
      const buttonBgs = document.querySelectorAll('button')
      const buttonBgPressed = document.getElementById(buttonPressed);

      // This gets the entire element button and grabs all existing ones in the html
      // To print just button id do buttons.id
      const buttons = document.querySelectorAll('span')
      const pressed = document.getElementById(buttonPressed);

      pressedSpan = pressed.querySelector('span');
      

      buttonBgs.forEach(buttonBg => {
        buttonBg.classList.remove('pushable-pressed');
        buttonBg.classList.add('pushable');
      });

      buttons.forEach(button => {
        button.classList.remove('front-pressed');
        button.classList.add('front');
      });

      pressedSpan.classList.remove('front')
      pressedSpan.classList.add('front-pressed')

      buttonBgPressed.classList.remove('pushable');
      buttonBgPressed.classList.add('pushable-pressed');

      // Reset all button colors to grey
      // buttons.forEach(button => {
      //   console.log('Buttons Color Reset')
      //   button.classList.remove('pushable-green')
      //   button.classList.remove('front-green')
      //   button.classList.add('pushable')
      //   button.classList.add('front')
      // });

      // const element = document.getElementById(buttonPressed);
      // element.classList.remove()
      // console.log(buttons)
    }

    // Call the function to include navbar
    includeNavbar();
  });
  
//   function scrollToElement(id, offset) {
  // onclick="scrollToElement('project', 100)"
//     console.log('offset clicked')
//     var element = document.getElementById(id);
//     var elementPosition = element.offsetTop - offset;

//     window.scrollTo({
//         top: elementPosition,
//         behavior: 'smooth'
//     });
// }
