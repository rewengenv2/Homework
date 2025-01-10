function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.backgroundColor = getRandomColor();
    document.getElementById('container').appendChild(circle);
}

function party(numCircles) {
    let count = 0;
    const interval = setInterval(() => {
        if (count >= numCircles) {
            clearInterval(interval);
        } else {
            createCircle();
            count++;
        }
    }, 300);
}

document.getElementById('startParty').addEventListener('click', () => {
    const numCircles = prompt('Введите количество кругов:');
    if (numCircles > 0) {
        document.getElementById('container').innerHTML = '';
        party(numCircles);
    }
});
