const s = "Hello world";
const splitVal = s.split(" ");
//console.log(splitVal);
const  wordLength= splitVal.length - 1;
const lastWord = splitVal[wordLength];
//console.log(lastWord);
const lastwordCount = lastWord.length;
console.log(lastwordCount);

const str = " fly me to the moon ";
const strTrim = str.trim();
//console.log(strTrim);
const strSplitted = strTrim.split(" ");
//console.log(strSplitted);
const strLastIndex = strSplitted.length - 1;
const strLastWord = strSplitted[strLastIndex];
const strLastWordLen = strLastWord.length;
console.log(strLastWordLen);



function isAnagram(str1, str2) {

  const sameCaseStr1 = str1
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  const sameCaseStr2 = str2
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  //console.log(sameCaseStr1);
  //console.log(sameCaseStr2);
  if (sameCaseStr1 === sameCaseStr2) {
    return true;
  } else {
    return false;
  }
}
console.log(isAnagram("listen", "Silent"));