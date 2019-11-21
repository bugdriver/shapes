const shapeType = require("../src/shapeType");
const assert = require("assert");
const pattern = require("../src/patternLib");

describe("gives list of rows of rectangle for given noOfRows and noOfColumns",function(){
  it("should work for positive dimensions for filled Rectangle",function(){
    let actual = shapeType.createRectanglePattern(3,4,pattern.createFilledRow);
    assert.deepStrictEqual(actual ,["****","****","****"]);
  });

  it("should work for hollow rectangle for positive dimensions",function(){
    let actual = shapeType.createRectanglePattern(3,4,pattern.createHollowRow);
    assert.deepStrictEqual(actual,["*  *","*  *","*  *"]);
  });

  it("should work for alternating rectangle for positive dimensions",function(){
    let actual = shapeType.createRectanglePattern(3,4,pattern.createAlternatingRow);
    assert.deepStrictEqual(actual,["----","++++","----"]);
  });
  
  it("should work for interlaced rectangle for positive dimensions",function(){
    let actual = shapeType.createRectanglePattern(3,4,pattern.createInterlacedRow);
    assert.deepStrictEqual(actual,["+-+-","-+-+","+-+-"]);
  });
});
