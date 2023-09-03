function toggleNav() {
  
    const navLinks = document.getElementById('navLinks');
    const listOfLinks = document.getElementById('navLinks')
    const links = listOfLinks.getElementsByTagName('li');

    // console.log(links);

    for(let i=0; i<=links.length-1; i++){
      // console.log(links[i]);

      links[i].classList.toggle('active');
    }

    navLinks.classList.toggle('active');
  }
  
function callIg(){
  // Need to change this smId to smIg
    const smId = document.getElementById('igId');
    const curtains = document.getElementById('curtainsIg');
    const curtain = curtains.getElementsByTagName('div');

    for(let i=0; i<=curtain.length-1; i++){
      curtain[i].classList.toggle('active');
    }

    console.log(smId)
    smId.classList.toggle('active');

}

function callFb(){

  const smId = document.getElementById('fbId')
  const curtains = document.getElementById('curtainsFb');
  const curtain = curtains.getElementsByTagName('div');

  for(let i=0; i<=curtain.length-1; i++){
    curtain[i].classList.toggle('active');
  }

  console.log(smId)
  smId.classList.toggle('active');

}

function callEm(){

  const smId = document.getElementById('emId')
  const curtains = document.getElementById('curtainsEm');
  const curtain = curtains.getElementsByTagName('div');

  for(let i=0; i<=curtain.length-1; i++){
    curtain[i].classList.toggle('active');
  }

  console.log(smId)
  smId.classList.toggle('active');

}

function callPn(){

  const smId = document.getElementById('pnId')
  const curtains = document.getElementById('curtainsPn');
  const curtain = curtains.getElementsByTagName('div');

  for(let i=0; i<=curtain.length-1; i++){
    curtain[i].classList.toggle('active');
  }

  console.log(smId)
  smId.classList.toggle('active');

}





  // Get a reference to the flag element.
  const flagElement = document.getElementById('flag');

  // Function to update the flag image based on the Y position.
  function updateFlagImage() {
    const scrollY = window.scrollY; // Get the current scroll position.

    // Define the Y positions at which you want to change the image.
    const malaysiaPosition = 200; // Change this value as needed.
    const unitedStatesPosition = 400; // Change this value as needed.

    // Determine which image to display based on the scroll position.
    let imageName;
    console.log(scrollY);
    switch (true) {
      case scrollY >= 1512:
        imageName = 'images/flags/singapore.png';
        break;
      case scrollY >= 1088:
        imageName = 'images/flags/south-korea.png';
        break;
      case scrollY >= 664:
        imageName = 'images/flags/japan.png';
        break;
      case scrollY >= 240:
        imageName = 'images/flags/united-states.png';
        break;
      case scrollY >= 200:
        imageName = 'images/flags/malaysia.png';
        break;
      default:
        imageName = 'images/flags/malaysia.png'; // Change this to your default image.
    }

    // Set the image source based on the determined imageName.
    flagElement.src = imageName;
  }

  // Add an event listener to listen for changes in scroll position.
  window.addEventListener('scroll', updateFlagImage);

  // Call the function initially to set the image based on the initial scroll position.
  updateFlagImage();




// // Get a reference to the flag element.
// const flagElement = document.getElementById('flag');

// // Function to update the flag image based on the Y position.
// function updateFlagImage() {
//   const scrollY = window.scrollY; // Get the current scroll position.

//   // Define the Y position at which you want to change the image.
//   // const changeImageYPosition = 200; // Change this value as needed.
//   console.log(scrollY);
//   // if (scrollY >= changeImageYPosition) {
//   //     flagElement.src = 'images/flags/united-states.png'; // Change the image source.
      
//   // } else {
//   //     flagElement.src = 'images/flags/malaysia.png'; // Reset the image source.
//   // }

//   switch(true){
//     case scrollY >= 199:
//       flagElement.src = 'images/flags/united-states.png';
//       break;
//     case scrollY >= 599:
//       flagElement.src = "images/flags/malaysia.png";
//   }
// }

//   // Add an event listener to listen for changes in scroll position.
//   window.addEventListener('scroll', updateFlagImage);













// // Get a reference to the flag element.
// const flagElement = document.getElementById('flag');

// // Function to update the flag image based on the Y position.
// function updateFlagImage() {
//   const scrollY = window.scrollY; // Get the current scroll position.

//   // Define the Y position at which you want to change the image.
//   const changeImageYPosition = 200; // Change this value as needed.

//   // Check if the current Y position is greater than or equal to the changeImageYPosition.
//   if (scrollY >= changeImageYPosition) {
//     flagElement.style.opacity = '0'; // Fade out the image smoothly.
//     setTimeout(() => {
//       flagElement.src = 'images/flags/united-states.png'; // Change the image source.
//       flagElement.style.opacity = '1'; // Fade in the new image smoothly.
//     }, 300); // Set a delay to wait for the fade-out transition to complete.
//   } else {
//     flagElement.style.opacity = '0'; // Fade out the image smoothly.
//     setTimeout(() => {
//       flagElement.src = 'images/flags/malaysia.png'; // Reset the image source.
//       flagElement.style.opacity = '1'; // Fade in the original image smoothly.
//     }, 300); // Set a delay to wait for the fade-out transition to complete.
//   }
// }

//     // Add an event listener to listen for changes in scroll position.
//     window.addEventListener('scroll', updateFlagImage);

