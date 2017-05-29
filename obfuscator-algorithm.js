var input;
var input = 'testing the elements';

var keyboard = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

var inputArray = input.split('');

var outputArray = [];
for (var j=0; j<inputArray.length; j++) {
  var modifiedChar = inputArray[j];
  console.log(modifiedChar)
  if(inputArray.indexOf(modifiedChar) >= 0) {
    // get index of input element on keyboard
    var getIndex = inputArray.indexOf(modifiedChar);

    // suppose the letter in input array is q; let's change it to the next letter in array, w.
    var newIndex = getIndex + 1;
    modifiedChar = keyboard[newIndex];
  }

  outputArray.push(modifiedChar);
}

console.log(outputArray);
