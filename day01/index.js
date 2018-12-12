// DAY 1
const fs = require("fs");

fs.readFile("data", "utf8", (err, data) => {
  let counter = 0;
  let result = null;
  let repeat = null;
  let history = [];
  while (!repeat) {
    data.split("\n").map(n => {
      history.push(counter);
      counter += parseInt(n);
      if (!repeat && history.includes(counter)) {
        repeat = counter;
      }
    });
    result = !result ? counter : result;
  }
  console.log(result, repeat);
});
