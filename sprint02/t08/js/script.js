let a = prompt();
if (a == 1) {
    alert(a * 2 / 'a');
} else if (a == 2) {
    alert((a - 2) / 0);

} else if (a == 3) {
    alert(0 * Infinity);

} else if (a == 4) {
    alert(a * 40000000 == Infinity);

} else if (a > 4 || a < 1) {
    alert('Wrong input');

} else {
    alert('Wrong input');

}