/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
  if (size < 2) {
    return "";
  }

  return `${symbol.repeat(size)}\n${new Array(size - 2)
    .fill(null)
    .map(() => `${symbol}${" ".repeat(size - 2)}${symbol}\n`)
    .join("")}${symbol.repeat(size)}`;
}
