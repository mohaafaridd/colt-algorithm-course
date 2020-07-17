const reverse = (str: string) => {
  if (str.length === 0) return "";
  return str[str.length - 1].concat(reverse(str.slice(0, -1)));
};

console.log('reverse("awesome")', reverse("awesome"));
console.log('reverse("rithmschool")', reverse("rithmschool"));
