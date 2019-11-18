const validate = require("./validateInput");
const shapeCreator = require("./shapeCreators");

const getShapeRows = function(shape,pattern,dimension){
  const noOfRows = dimension[0];
  const noOfColumns = dimension[1];
  const shapeRows =  shapeCreator[pattern+shape](+noOfRows,+noOfColumns);
  return shapeRows.join("\n");
}

const createPattern = function(userInputs){
  const shapeProperties = validate.parseShapeProperties(userInputs);
  if(shapeProperties){
    const patternToCreate = shapeProperties["-p"];
    const shapeToCreate = shapeProperties["-s"];
    const dimension = shapeProperties["-d"].split(",");
    return getShapeRows(shapeToCreate,patternToCreate,dimension);
  }
  return "Wrong Input";
}

exports.createPattern = createPattern;
