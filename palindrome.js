function palindrome(str) {
  let str1 = str.toLowerCase().replace(/\W|_/g, "");
  let str2 = str1.split("").reverse().join("");
  return str1 === str2 ? true : false;
}



palindrome("1 eye for of 1 eye.");
