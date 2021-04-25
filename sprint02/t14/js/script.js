function total(addCount, addPrice, currentTotal) {
    if (currentTotal === undefined) {
        currentTotal = 0;
    }
    return addCount * addPrice + currentTotal;
}
console.log(total(5, 234.65, 37777));