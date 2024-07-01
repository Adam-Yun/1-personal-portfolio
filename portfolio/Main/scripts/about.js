document.addEventListener('DOMContentLoaded', (event) => {
    const flipContainer = document.getElementById('flipContainer');
    const flipCard = document.getElementById('flipCard');

    flipContainer.addEventListener('click', () => {
        flipCard.classList.toggle('flip');
    });
});
