//Part 1
document.body
  .querySelector("pre")
  .textContent.split("\n")
  .slice(0, this.length - 1)
  .map(item => parseInt(item))
  .reduce((n, r) => n + r);
