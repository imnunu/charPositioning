function countLetters (inputWord) {

  var outputObject = {};
 // var position = [];

  for (var i = 0; i < inputWord.length; i++){

    var char2 = inputWord[i];

      if (char2 === ' ') {
         continue;
       } else if (!outputObject.hasOwnProperty(char2)) {
           outputObject[char2] = [i];
       }
      //else if (outputObject.hasOwnProperty(char2)){
      //   pos.push(i);
      // } else {
      //   outputObject[char2] = i;

      else {
        outputObject[char2].push(i);

        }
  }

  return outputObject;
}
console.log(countLetters('lighthouse in the house'));

