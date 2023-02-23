function palindrome(str) {
    var remAll = /[\W_]/g;
    // change string to lowercase & replace unwanted chars
    var lowCaseStr = str.toLowerCase().replace(remAll, ''); 
    // split string to an array, reverse array and joins all elements into a string
    var reverseStr = lowCaseStr.split('').reverse().join(''); 
    // check if reverseStr = lowCaseStr. True = palindrome
    return reverseStr === lowCaseStr;
  }
  
  palindrome("eye");