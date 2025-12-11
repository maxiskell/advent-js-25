/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let count = 0;

  for (let i = 0; i < warehouse.length; ++i) {
    for (let j = 0; j < warehouse[i].length; ++j) {
      if (warehouse[i][j] !== "*") {
        continue;
      }

      let top = i > 0 && warehouse[i - 1][j] === "#";
      let right = warehouse[i][j + 1] === "#";
      let left = j > 0 && warehouse[i][j - 1] === "#";
      let down = i < warehouse.length - 1 && warehouse[i + 1][j] === "#";

      if (!top && !right && !left && !down) {
        count++;
      }
    }
  }

  return count;
}
