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
  