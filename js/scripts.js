

var pigLatin = function (word) {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.indexOf(word.charAt(0)) !== -1) {
    return word + "ay";
  } else if (vowels.indexOf(word.charAt(1)) !== -1) {
    return (word.slice(1) + word.slice(0, 1) + "ay");
  } else {
    return (word.slice(2) + word.slice(0,2) + "ay");
  }
};


// var pigLatin = function (word) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   var counter = 0
//   var vowelPresent = vowels.indexOf(word.charAt(counter))
//   for (counter, vowelPresent = -1, counter +=1)
//
