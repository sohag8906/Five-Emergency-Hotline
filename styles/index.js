// hard click
let count = 0;


const heartDisplay = document.getElementById('heart-count');

const cardButtons = document.querySelectorAll('.card-count');
for (let i = 0; i < cardButtons.length; i++) {
    cardButtons[i].addEventListener('click', function() {
        count++;
        heartDisplay.textContent = count; 
        console.log(count);
    });
}

// cupy click
