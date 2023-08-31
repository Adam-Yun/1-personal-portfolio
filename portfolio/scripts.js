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

    const smId = document.getElementById('igId')
    const curtains = document.getElementById('curtains');
    const curtain = curtains.getElementsByTagName('div');

    for(let i=0; i<=curtain.length-1; i++){
      curtain[i].classList.toggle('active');
    }

    console.log(smId)
    smId.classList.toggle('active');

}

function callFb(){

  const smId = document.getElementById('fbId')
  const curtains = document.getElementById('curtains');
  const curtain = curtains.getElementsByTagName('div');

  for(let i=0; i<=curtain.length-1; i++){
    curtain[i].classList.toggle('active');
  }

  console.log(smId)
  smId.classList.toggle('active');

}

function callEm(){

  const smId = document.getElementById('emId')
  const curtains = document.getElementById('curtains');
  const curtain = curtains.getElementsByTagName('div');

  for(let i=0; i<=curtain.length-1; i++){
    curtain[i].classList.toggle('active');
  }

  console.log(smId)
  smId.classList.toggle('active');

}

function callPn(){

  const smId = document.getElementById('pnId')
  const curtains = document.getElementById('curtains');
  const curtain = curtains.getElementsByTagName('div');

  for(let i=0; i<=curtain.length-1; i++){
    curtain[i].classList.toggle('active');
  }

  console.log(smId)
  smId.classList.toggle('active');

}