const utility = require("./utility.js");

const getDiamondShape = function(height){
  const upperHalfRows = utility.range(1,height+1,2);
  const LowerHalfRows = utility.range(1,height,2).reverse();
  return upperHalfRows.concat(LowerHalfRows);
}

const getTriangleShape = function(height){
  return utility.range(1,height+1);
}

const getRectangleShape = function(noOfRows,noOfColumns){
  return  utility.range(1,noOfRows+1).fill(noOfColumns);
}

const createFilledRow = function(noOfColumns){
  return "*".repeat(noOfColumns);
}

const createHollowRow = function(noOfColumns){
  let row = "";
  for(let colNo = 1;colNo <= noOfColumns ; colNo++){
    if(colNo == 1 || colNo == noOfColumns){
      row += "*";
    } else {
      row += " ";
    }
  }
  return row;
}


const createAlternatingRow = function(noOfColumns,rowNo){
  let row = "";
  for(let colNo = 1;colNo <= noOfColumns ; colNo++){
    if(utility.isEven(rowNo)){
      row += "-";
    } else {
      row += "+";
    }
  }
  return row;
}


const createInterlacedRow = function(noOfColumns,rowNo){
  const symbols = ["+","-"];
  let row = "";
  let currentSymbolIndex = rowNo % 2;
  let currentSymbol = symbols[currentSymbolIndex];
  for(let colNo = 1;colNo <= noOfColumns ; colNo++){
    row += currentSymbol;
    currentSymbolIndex = Math.abs(currentSymbolIndex - 1);
    currentSymbol = symbols[currentSymbolIndex];
  }
  return row;
}

const createAngledRow = function(noOfColumns){
  let row = "";
  for(let colNo = 1;colNo <= noOfColumns ; colNo++){
    if(colNo == 1){
      row += "/";
    } else if(colNo == noOfColumns) {
      row += "\\";
    } else {
      row += " ";
    }
  }
  return row;
}

exports.getTriangleShape = getTriangleShape;
exports.getRectangleShape = getRectangleShape;
exports.getDiamondShape = getDiamondShape;
exports.createFilledRow = createFilledRow;
exports.createHollowRow = createHollowRow;
exports.createAlternatingRow = createAlternatingRow;
exports.createInterlacedRow = createInterlacedRow;
exports.createAngledRow = createAngledRow;
