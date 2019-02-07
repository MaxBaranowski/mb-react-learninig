/*eslint no-extend-native: ["error", { "exceptions": ["String", "Object"] }]*/

/* Capitalize First Letter in a String */
String.prototype.capitalizeFirstLetter = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
