function isPalindrome(string) {
  let value = string.trim().toUpperCase();
  for (let i = 0; i < Math.floor(value.length / 2); i++) {
    if (value[i] === value[value.length - 1 - i]) {
      return true;
    } else {
      return false;
    }
  }
}
