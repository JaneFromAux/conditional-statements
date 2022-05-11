
console.log('servus');


// Level1_2

let wert = document.getElementById('wert');
let quali = document.getElementById('quali');

function weather() {
    if (quali.value >= 8 && quali.value <= 10) {
        console.log('super');
        wert.innerHTML = "super";
    } else if (quali.value >= 6 && quali.value <= 7) {
        console.log('guut');
        wert.innerHTML = "guut";
    } else if (quali.value >= 3 && quali.value <= 5) {
        console.log('ookay');
        wert.innerHTML = "ookay";
    } else if (quali.value >= 0 && quali.value <= 2) {
        console.log('schlecht');
        wert.innerHTML = "schlecht";
    } else {
        console.log('Ergebnis kann nicht ausgewertet werden.');
        wert.innerHTML = "Ergebnis kann nicht ausgewertet werden.";
    }
}

// weather(5);
// weather(9);
// weather(2);



//Level1_1
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

// Level1_3

let input = document.getElementById('input');
let output = document.getElementById('output');

function greaterThan() {
    if (input.value >= 18) {
        output.innerHTML = "Ja. Du darfst Shisha rauchen."
        console.log(true);
    } else if (input.value < 18) {
        output.innerHTML = "Nein. Du darfst keine Shisha rauchen."
        console.log(false);
    }
}
