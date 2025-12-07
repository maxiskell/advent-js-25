/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  function getLevelStr(level, padding) {
    return `${" ".repeat(padding)}${level}`;
  }

  function decorate(t) {
    let starPosition = 0;
    let chars = [...t];

    for (let i = 0; i < chars.length; ++i) {
      if (chars[i] === "*") {
        starPosition++;

        if (starPosition % frequency === 0) {
          chars[i] = ornament;
        }
      }
    }

    return chars.join("");
  }

  let level = "*";
  let padding = height - 1;
  let tree = getLevelStr(level, padding) + "\n";

  for (let i = 0; i < height - 1; ++i) {
    level = `*${level}*`;

    padding = height - i - 2;
    tree += getLevelStr(level, padding) + "\n";
  }

  tree = decorate(tree) + getLevelStr("#", height - 1);

  return tree;
}
