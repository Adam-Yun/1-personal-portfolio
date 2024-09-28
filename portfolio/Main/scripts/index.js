function changeTitle(){

    const titles = ['Fullstack Developer','Computer Vision','AI Developer']
    const workTitle = document.getElementById('workTitle')

    let fade = 0;
    let count = 0;

    workTitle.innerHTML = titles[count]
    workTitle.classList.remove('fade-out');
    workTitle.classList.add('fade-in');

    setInterval(() => {
        // console.log(fade)
        console.log(count)
        count++;
        if(count >= titles.length){
            count = 0
        }

        if(fade % 2 == 0){
            // console.log('Even')
            workTitle.classList.add('fade-out');
            workTitle.classList.remove('fade-in');
        }else{
            workTitle.innerHTML = titles[count]
            // console.log('Odd')
            workTitle.classList.remove('fade-out');
            workTitle.classList.add('fade-in');
        }
        fade++;
    }, 1500); // 3000 milliseconds = 3 seconds    
}
changeTitle()



function changeTitleTemp() {
    const titles = ['Fullstack Developer', 'Computer Vision', 'AI Developer'];
    let count = 0;
    const workTitle = document.getElementById('workTitle');

    setInterval(() => {
        // Add fade-out class to start fading out
        workTitle.classList.add('fade-out');

        // After fade-out transition ends, change the title
        setTimeout(() => {
            count++;
            if (count >= titles.length) {
                count = 0;
            }

            workTitle.innerText = titles[count];

            // Remove fade-out class and add fade-in class to start fading in
            workTitle.classList.remove('fade-out');
            workTitle.classList.add('fade-in');

            // Wait for the fade-in to complete before resetting opacity
            setTimeout(() => {
                workTitle.classList.remove('fade-in');
                workTitle.style.opacity = '1'; // Ensure opacity is set to 1 after fading in
            }, 500); // Duration of the fade-in effect
        }, 500); // Duration of the fade-out effect
    }, 3000); // Total interval duration (2 seconds for fading out + 2 seconds for the next title)
}

// changeTitle();
