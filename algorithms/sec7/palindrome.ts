const palindrome = (str: string) => {
  if (str.length <= 1) return true;
  else if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    palindrome(str.slice(1, -1));
    return true;
  }
};

console.log('palindrome("awesome")', palindrome("awesome"));
console.log('palindrome("foobar")', palindrome("foobar"));
console.log('palindrome("tacocat")', palindrome("tacocat"));
console.log(
  'palindrome("amanaplanacanalpanama")',
  palindrome("amanaplanacanalpanama")
);

console.log(
  'palindrome("amanaplanacanalpandemonium")',
  palindrome("amanaplanacanalpandemonium")
);
