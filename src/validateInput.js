const isEven = function(number){
  return number % 2 == 0;
}

const isWholeNumber = function(dimension){
  return Number.isInteger(+dimension) && +dimension >= 0 && dimension.length > 0;
}

const isValidOptions = function(option,args){
  const shapes = ["rectangle","triangle","diamond"];
  const patterns = ["filled","alternating","hollow","interlaced","angled"];
  const validOptionPosition = ["-s","-p","-d"].includes(option);
  const validPropertiesPosition = shapes.includes(args) || patterns.includes(args);
  const shapeValid = option === "-s" && shapes.includes(args);
  const patternsValid = option === "-p" && patterns.includes(args);
  const dimensionValid = option === "-d" && args.split(",").every(isWholeNumber);
  const shapePatternPairValid = shapeValid || patternsValid || dimensionValid;
  const propertiesPositionValid = validOptionPosition || validPropertiesPosition;
  return shapePatternPairValid && propertiesPositionValid;
}

const isCombinationsInvalid = function(userInput){
  const dimension = userInput["-d"].split(",");
  const RectDimLength = userInput["-s"] == "rectangle" && dimension.length < 2;
  const diamondDimEven = userInput["-s"] == "diamond" && isEven(+dimension[0]);  
  const rectTriAngled = userInput["-s"] != "diamond" && userInput["-p"] == "angled";
  return RectDimLength || diamondDimEven || rectTriAngled;
}

const parseShapeProperties = function(userInputs){
  const defaultInput = {"-s":"rectangle","-p":"filled","-d":"5,5"};

  for(let index = 0; index < userInputs.length ; index+=2){
    if(!isValidOptions(userInputs[index] , userInputs[index + 1])){
      return undefined;
    }
    defaultInput[userInputs[index]] = userInputs[index + 1];
  }
  return !isCombinationsInvalid(defaultInput) && defaultInput;
}

exports.parseShapeProperties = parseShapeProperties;
