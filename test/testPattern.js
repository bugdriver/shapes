const pattern = require('../src/patternLib');
const assert = require('assert');

describe("give no of stars in each row of Diamond for given height",function(){
  it("should give no of rows for height 3",function(){
    assert.deepStrictEqual(pattern.getDiamondShape(3),[1,3,1]);
  });
});

describe("give no of stars in each row of triangle for given height",function(){
  it("should give no of row for height 3",function(){
    assert.deepStrictEqual(pattern.getTriangleShape(3),[1,2,3]); 
  });
});

describe("give no of stars in each row of rectange for given dimensions",function(){
  it("should give no of rows for positive dimensions",function(){
    assert.deepStrictEqual(pattern.getRectangleShape(3,4),[4,4,4]);
  });
});

describe("give row of star with desired no of column",function(){
  it("should give row of star with positive no of column",function(){
    assert.deepStrictEqual(pattern.createFilledRow(5),"*****");
  });
});

describe("give hollow row of stars with desired no of column",function(){
  it("should give row of star for positive no of column",function(){
    assert.deepStrictEqual(pattern.createHollowRow(5),"*   *");
  });
});

describe("give row of plus and minus for odd and even rowNo respectivily",function(){
  it("should give row of minus for even rowNo",function(){
    assert.deepStrictEqual(pattern.createAlternatingRow(5,2),"-----");
  });
  it("should give row of plus for odd rowNo",function(){
    assert.deepStrictEqual(pattern.createAlternatingRow(5,1),"+++++");
  });
});

describe("give an interlaced row for given noOfColumns and rowNo",function(){
  it("should give row starting with plus for even rowNo",function(){
    assert.deepStrictEqual(pattern.createInterlacedRow(5,2),"+-+-+");
  });
  it("should give row starting with minus for odd rowNo",function(){
    assert.deepStrictEqual(pattern.createInterlacedRow(5,1),"-+-+-");
  });
});

describe("give angled row for given noofColumns",function(){
  it("should give angled row for positive no of columns",function(){
    assert.deepStrictEqual(pattern.createAngledRow(5),"/   \\");
  });
});
