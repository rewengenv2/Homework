const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');
const toggleButton = document.getElementById('toggleButton');
let isOn = false;

function turnOffAllLights() {
    redLight.classList.remove('on');
    yellowLight.classList.remove('on');
    greenLight.classList.remove('on');
}

toggleButton.addEventListener('click', function() {
    isOn = !isOn;
    if (isOn) {
        toggleButton.textContent = 'OFF';
    } else {
        toggleButton.textContent = 'ON';
        turnOffAllLights();
    }
});

redLight.addEventListener('click', function() {
    if (isOn) {
        turnOffAllLights();
        redLight.classList.add('on');
    }
});

yellowLight.addEventListener('click', function() {
    if (isOn) {
        turnOffAllLights();
        yellowLight.classList.add('on');
    }
});

greenLight.addEventListener('click', function() {
    if (isOn) {
        turnOffAllLights();
        greenLight.classList.add('on');
    }
});