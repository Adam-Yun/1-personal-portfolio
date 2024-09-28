function changeTitle(){

    const titles = ['Fullstack Developer','Computer Vision','AI Developer']
    const workTitle = document.getElementById('workTitle')

    let fade = 0;
    let count = 1;

    setInterval(() => {
        // console.log(fade)
        if(count >= titles.length){
            count = 0
        }

        console.log(count)

        if(fade % 2 == 0){
            // console.log('Even')
            workTitle.classList.add('fade-out');
            workTitle.classList.remove('fade-in');
        }else{
            workTitle.innerHTML = titles[count]
            count++;
            // console.log('Odd')
            workTitle.classList.remove('fade-out');
            workTitle.classList.add('fade-in');
        }
        fade++;
    }, 1800); // 3000 milliseconds = 3 seconds    
}

changeTitle()