const utility = require("../src/utility");
const assert = require("assert");

describe("check if passing integer is even or not",function(){
  it("should work for positive integer",function(){
    assert.deepStrictEqual(utility.isEven(2),true);
    assert.deepStrictEqual(utility.isEven(1),false);
  });

  it("should work for negetive integer",function(){
    assert.deepStrictEqual(utility.isEven(-2),true);
    assert.deepStrictEqual(utility.isEven(-1),false);
  });
});

describe("generate list of numbers between given range",function(){
  it("should give range for one positive number",function(){
    assert.deepStrictEqual(utility.range(3),[0,1,2]);
  });

  it("should give empty array for negetive number",function(){
    assert.deepStrictEqual(utility.range(-3),[]);
  });

  it("should give range for two positive numbers",function(){
    assert.deepStrictEqual(utility.range(2,8),[2,3,4,5,6,7]);
  });

  it("should give range when step is passed",function(){
    assert.deepStrictEqual(utility.range(1,9,3),[1,4,7]);
  });

  it("should range in decreasing order when step is negetive",function(){
    assert.deepStrictEqual(utility.range(5,1,-1),[5,4,3,2]);
  });

  it("should give empty array if no argument pass",function(){
    assert.deepStrictEqual(utility.range(),[]);
  });

});

describe("swap slash and backslash in given inputString",function(){
  it("should give empty string for empty string",function(){
    assert.deepStrictEqual(utility.swapSlashWithBackSlash(""),'');
  });

  it("should swap slash and backslash in given string",function(){
    assert.deepStrictEqual(utility.swapSlashWithBackSlash("/\\"),"\\/");
  });

  it("should give same if only slash is present in string",function(){
    assert.deepStrictEqual(utility.swapSlashWithBackSlash("/"),"/");
  });
});

describe("replace any non space character with asterisk",function(){
  it("should give empty string from empty string",function(){
    assert.deepStrictEqual(utility.replaceSlashesWithAsterisk(""),"");
  });

  it("should replace characters in string with astrist",function(){
    assert.deepStrictEqual(utility.replaceSlashesWithAsterisk("\\/"),"**");
  });

  it("should replace non space characters with astrisk",function(){
    assert.deepStrictEqual(utility.replaceSlashesWithAsterisk("/  \\"),"*  *");
  });
});
