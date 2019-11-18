const pattern = require('./patternLib');

const createRectanglePattern = function(noOfRows,noOfColumns,patternOperator){
  const rectangleShape = pattern.getRectangleShape(noOfRows,noOfColumns);
  
  const rectanglePattern = rectangleShape.map(function(noOfColumns,rowNo){
    return patternOperator(noOfColumns,rowNo);
  });

  return rectanglePattern;
}

const createTrianglePattern = function(height,patternOperator){
  const triangleShape = pattern.getTriangleShape(height);
  
  const trianglePattern = triangleShape.map(function(noOfColumns,rowNo){
    return patternOperator(noOfColumns,rowNo);
  });

  return trianglePattern;
}

const createDiamondPattern = function(height,patternOperator){
  const diamondShape = pattern.getDiamondShape(height);
  
  const diamondPattern = diamondShape.map(function(noOfColumns,rowNo){
    const noOfSpaces = (diamondShape.length - noOfColumns)/2;
    const rowSpaces = " ".repeat(noOfSpaces);
    const diamondRow = patternOperator(noOfColumns,rowNo);
    return rowSpaces.concat(diamondRow);
  });
  
  return diamondPattern;
};

exports.createRectanglePattern = createRectanglePattern;
exports.createTrianglePattern = createTrianglePattern;
exports.createDiamondPattern = createDiamondPattern;

