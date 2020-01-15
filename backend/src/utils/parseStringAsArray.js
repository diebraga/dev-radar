module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim());   // save in array - remove space betewen techs
}