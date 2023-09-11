// "nameofvariable".classList.toggle('active');

function toggleNavbar(){
    const idLinks = document.getElementById('ulLinksContainer');
    const links = idLinks.getElementsByTagName('div');
    // console.log(links);
    for(let i=0; i<links.length; i++){
        console.log(links[i])
        links[i].classList.toggle('active');
    }
}