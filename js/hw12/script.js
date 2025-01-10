const slider = document.getElementById('myRange');
const body = document.body;
const squaresContainer = document.querySelector('.squares-container');

slider.addEventListener('input', function() {
    const value = parseInt(this.value);

    if (value === 0) { 
        body.className = '';
        squaresContainer.className = 'squares-container';
    } else if (value === 1) { 
        body.className = 'bg-gray';
        squaresContainer.className = 'squares-container position-1';
    } else if (value === 2) { 
        body.className = 'bg-black';
        squaresContainer.className = 'squares-container position-2';
    }
});
