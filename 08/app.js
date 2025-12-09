/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  function unique(char, idx, arr) {
    let lower = char.toLowerCase();

    return (
      arr.findIndex((c) => c.toLowerCase() === lower) === idx &&
      arr.findLastIndex((c) => c.toLowerCase() === lower) === idx
    );
  }

  return toy.split("").filter(unique)[0] ?? "";
}
