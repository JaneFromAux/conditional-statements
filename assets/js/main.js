
console.log('servus');


// Level1_2
function weather(quality) {
    if (quality >= 8 && quality <= 10) {
        console.log('super');
    } else if (quality >= 6 && quality <= 7) {
        console.log('guut');
    } else if (quality >= 3 && quality <= 5) {
        console.log('ookay');
    } else if (quality >= 0 && quality <= 2) {
        console.log('schlecht');
    } else {
        console.log('Ergebnis kann nicht ausgewertet werden.');
    }
}

weather(5);
weather(9);
weather(2);

//Level2_2
let ergebnis = document.getElementById('ergebnis');
let alter = document.getElementById('alter');

function adult() {
    if (alter.value >= 18) {
        console.log('true');
        ergebnis.innerHTML = "volljährig";
    } else if (alter.value < 18) {
        console.log('false');
        ergebnis.innerHTML = "minderjährig";
    }
}