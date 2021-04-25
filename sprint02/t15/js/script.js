let startInput = prompt("enter start");
let endInput = prompt("enter end");

startInput = Number(startInput);
endInput = Number(endInput);

printDescription(startInput, endInput);

function printDescription(start, end) {
    let desc;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            desc = i + ' is even';
        }
        if (i % 3 === 0) {
            desc += ', ' + i + ' a multiple of 3';
        }
        if (i % 10 === 0) {
            desc += ', ' + i + ' a multiple of 10';
        }
        console.log(desc);
        desc = '';
    }
}