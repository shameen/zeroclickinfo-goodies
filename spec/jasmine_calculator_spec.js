GLOBAL.DDH = {};
var jasmine_calculator = require("../share/goodie/jasmine_calculator/jasmine_calculator.js");

describe("jasmine_calculator", function() {

  it("should be able to add two numbers", function() {
    expect(jasmine_calculator.add(1, 2)).toEqual(3);
  });

  it("should be able to subtract two numbers", function() {
    expect(jasmine_calculator.subtract(3, 2)).toEqual(1);
  });

  it("should be able to add three numbers", function() {
    expect(jasmine_calculator.addThree(1, 2, 3)).toEqual(6);
  });

});
