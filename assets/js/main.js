
console.log('servus');

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