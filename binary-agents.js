function binaryAgent(str) {
  var biString = str.split(" ");
  var uniString = [];

  /*using the radix (or base) parameter in parseInt,
   we can convert the binary
      number to a decimal number while simultaneously converting to a char*/

  for (var i = 0; i < biString.length; i++) {
    uniString.push(String.fromCharCode(parseInt(biString[i], 2))); //conversion of the binary digit to character
  }

  // we then simply join the string
  return uniString.join("");
}

console.log(binaryAgent("01001101 01000001 01000100 01000101 00100000 01000010 01011001 00100000 01001110 01010101 01000101 01001100 00100001 00100000"));
/**
    Separate the string into an array of strings separated by whitespace.
    Create some variables that you will use along the way - the names are self explanatory for the most part.
    Iterate through each binary string in the new array.
    Convert to decimal by using parseInt(_binary_, 2). Use the second parameter to specify the base of the input numbers.
    At the end, return the converted message.
 */
