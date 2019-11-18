const isEven = function(number){
  return number % 2 == 0;
}

const range = function range(start, stop, step) {
  if (typeof stop == 'undefined') {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step == 'undefined') {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return [];
  }

  const result = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }

  return result;
};

const swapSlashWithBackSlash = function(row){
  return row.replace(/(\/)(.*)(\\)/,"$3$2$1");
}

const replaceSlashesWithAsterisk = function(row){
  return row.replace(/[^ ]/g,"*");
}

exports.isEven = isEven;
exports.range = range;
exports.swapSlashWithBackSlash = swapSlashWithBackSlash;
exports.replaceSlashesWithAsterisk = replaceSlashesWithAsterisk;
