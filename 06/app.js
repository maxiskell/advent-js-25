/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
  let colorsInOrder = [];
  let glovesByColor = new Map();

  for (let { hand, color } of gloves) {
    if (!glovesByColor.has(color)) {
      glovesByColor.set(color, { L: 0, R: 0 });
      colorsInOrder.push(color);
    }

    glovesByColor.get(color)[hand]++;
  }

  let result = [];
  for (let color of colorsInOrder) {
    let { L, R } = glovesByColor.get(color);
    let pairsCount = Math.min(L, R);

    for (let i = 0; i < pairsCount; ++i) {
      result.push(color);
    }
  }

  return result;
}
