// system number one: onclick

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// ----------------------

function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

// -----------------------

function makeBlack() {
    document.body.style.backgroundColor = 'black';
}

// system number two: onclick

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onClick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

document.getElementById('make-green').addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})