const pattern = require('./patternLib');
const utility = require('./utility');
const shapeType = require('./shapeType');


const filledRectangle = function(noOfRows,noOfColumns){
  return shapeType.createRectanglePattern(noOfRows,noOfColumns,pattern.createFilledRow);
}

const hollowRectangle = function(noOfRows,noOfColumns){
  const hollowRectangleRows =  shapeType.createRectanglePattern(noOfRows,noOfColumns,pattern.createHollowRow);  
  hollowRectangleRows[0] = pattern.createFilledRow(noOfColumns);
  hollowRectangleRows[hollowRectangleRows.length - 1] = pattern.createFilledRow(noOfColumns);
  return hollowRectangleRows;
}

const alternatingRectangle = function(noOfRows,noOfColumns){
  return shapeType.createRectanglePattern(noOfRows,noOfColumns,pattern.createAlternatingRow);
}

const interlacedRectangle = function(noOfRows,noOfColumns){
  return shapeType.createRectanglePattern(noOfRows,noOfColumns,pattern.createInterlacedRow);
}

const filledTriangle = function(height){
  return shapeType.createTrianglePattern(height,pattern.createFilledRow);
}

const hollowTriangle = function(height){
  const hollowTriangleRows =  shapeType.createTrianglePattern(height,pattern.createHollowRow);
  hollowTriangleRows[hollowTriangleRows.length - 1] = pattern.createFilledRow(height);
  return hollowTriangleRows;
}

const alternatingTriangle = function(height){
  return shapeType.createTrianglePattern(height,pattern.createAlternatingRow);
}

const interlacedTriangle = function(height){
  return shapeType.createTrianglePattern(height,pattern.createInterlacedRow);
}

const filledDiamond = function(height){
  return shapeType.createDiamondPattern(height,pattern.createFilledRow);
}

const hollowDiamond = function(height){
  return shapeType.createDiamondPattern(height,pattern.createHollowRow);
}

const alternatingDiamond = function(height){
  return shapeType.createDiamondPattern(height,pattern.createAlternatingRow);
}

const interlacedDiamond = function(height){
  return shapeType.createDiamondPattern(height,pattern.createInterlacedRow);
}

const angledDiamond = function(height){
  const angledRows = shapeType.createDiamondPattern(height,pattern.createAngledRow);
  const startAndLastRow = angledRows[0].replace("/","*");
  angledRows[0] = startAndLastRow;
  angledRows[angledRows.length - 1] = startAndLastRow;

  const middleRowIndex = Math.floor(angledRows.length/2);
  const lowerHalfRows = angledRows.slice(middleRowIndex);
  const reversedLowerHalfRows = lowerHalfRows.map(utility.swapSlashWithBackSlash);
  const upperHalfRows = angledRows.slice(0,middleRowIndex); 
  const angledDiamondRows = upperHalfRows.concat(reversedLowerHalfRows);
  const midRow = utility.replaceSlashesWithAsterisk(angledDiamondRows[middleRowIndex]);
  angledDiamondRows[middleRowIndex] = midRow;
  return angledDiamondRows;
}
exports.filleddiamond = filledDiamond;
exports.hollowdiamond = hollowDiamond;
exports.alternatingdiamond = alternatingDiamond;
exports.interlaceddiamond = interlacedDiamond;
exports.angleddiamond = angledDiamond;

exports.filledtriangle = filledTriangle;
exports.hollowtriangle = hollowTriangle;
exports.alternatingtriangle = alternatingTriangle;
exports.interlacedtriangle = interlacedTriangle;

exports.filledrectangle = filledRectangle;
exports.hollowrectangle = hollowRectangle;
exports.alternatingrectangle = alternatingRectangle;
exports.interlacedrectangle = interlacedRectangle;

