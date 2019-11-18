const pattern = require("./src/printPatternLib");

const main = function(){
  const userInputs = process.argv.slice(2);
  const shapePattern = pattern.createPattern(userInputs);
  console.log(shapePattern);
}

main();
