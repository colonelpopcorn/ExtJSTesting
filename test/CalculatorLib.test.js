const assert = require("assert");
const math = require("../app/CalculatorLib");

describe("CalculatorLib", function() {
    describe("#add(num1, num2)", function() {
        it("should return 4 when passed 2 and 2", function() {
            assert.equal(math.add(2, 2), 4);
        });
    });
});