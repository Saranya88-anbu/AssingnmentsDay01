function stringReverse(inputString)  {
   const characters = inputString.toLowerCase();
  let reverseResult = "";
  //console.log(str2);

  for (let i = characters.length - 1; i >= 0; i--) {
    reverseResult = reverseResult + characters[i];
  }
  console.log(reverseResult);
  if (characters === reverseResult) {
    return true;
  } else {
    return false;
  }
}

console.log(stringReverse("madam"));
//console.log(stringReverse("javascript"));



