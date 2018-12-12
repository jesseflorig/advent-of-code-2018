// DAY 2
const fs = require("fs");

const groupByOccurences = input => {
  const obj = {};
  const arr = input.split("").sort();
  arr.map(item => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  });
  return obj;
};

const compare = (source, target) => {
  const sArr = source.split("");
  const tArr = target.split("");
  let diff = 0;
  let result = "";

  sArr.map((digit, idx) => {
    if (digit === tArr[idx]) {
      result = result.concat(digit);
    } else {
      diff += 1;
    }
  });

  return diff == 1 ? result : null;
};

const checkOccurences = (input, count) => {
  const keys = Object.keys(input);
  let match = 0;
  keys.map(key => {
    match = input[key] === count ? 1 : match;
  });
  return match;
};

fs.readFile("data", "utf8", (err, data) => {
  let doubles = 0;
  let triples = 0;
  let match = null;
  data.split("\n").map((line, idx) => {
    serial = groupByOccurences(line);
    doubles += checkOccurences(serial, 2);
    triples += checkOccurences(serial, 3);

    const leftover = data.split("\n").slice(idx + 1);
    leftover.map(target => {
      match = !match ? compare(line, target) : match;
    });
  });
  const checksum = doubles * triples;
  console.log(checksum, match);
});
