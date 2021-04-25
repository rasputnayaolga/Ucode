describe("checkBrackets", function () {

    it("checks brackets", function () {
        assert.equal(checkBrackets('1)()(())2(()'), 2);
        assert.equal(checkBrackets(NaN), -1);
    });

});