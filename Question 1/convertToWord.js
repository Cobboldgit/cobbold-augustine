var num =
  "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(
    " "
  );
var tens = "twenty thirty forty fifty sixty seventy eighty ninety".split(" ");

const convertToWord = (n) => {
  // return numbers less than 20
  if (n < 20) {
    if (n === 0) {
      return "The lowest possible value is 1";
    }
    return num[n];
  }

  // returns numbers less than 100 but greater than 19
  if (n < 100) {
    return `${tens[~~(n / 10) - 2]}${n % 10 ? "-" + num[n % 10] : ""}`;
  }

  //returns number less than 1000 but greater than 99
  if (n < 1000) {
    return `${num[~~(n / 100)]} hundred ${
      n % 100 ? "and " + convertToWord(n % 100) : ""
    }`;
  }

  if (n <= 5000) {
    return `${convertToWord(~~(n / 1000))} thousand ${
      n % 1000 ? convertToWord(n % 1000) : ""
    }`;
  } else return "The heighest possible value is 5000";
};

