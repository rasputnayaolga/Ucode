function solver(a, b, c, d, e) {

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number' || typeof e !== 'number') {
        return 'Wrong input';
    }
    var x;
    x = a*a - 5*b*c + d/3 + e;
    return x.toFixed(2);
}
solver(40, -9, 0.5, 7, 100);