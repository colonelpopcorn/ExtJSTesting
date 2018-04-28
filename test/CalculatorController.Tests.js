describe("CalculatorLib", function() {
    var math;

    beforeEach(function() {
        math = Ext.create('TestTesting.view.main.CalculatorController', {});
    });

    afterEach(function() {
        math = undefined;
    });

    describe("#add(num1, num2)", function() {
        it("should return 4 when passed 2 and 2", function() {
            assert.equal(math.add(2, 2), 4);
        });
    });
});