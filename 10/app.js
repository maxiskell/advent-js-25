/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
  let depth = 0;
  let maxd = 0;
  let stack = [];

  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "[") {
      stack.push("[");
      depth++;
    } else if (s[i] === "]") {
      if (stack[stack.length - 1] !== "[") {
        return -1;
      }

      stack.pop();
      maxd = Math.max(maxd, depth);
      depth--;
    }
  }

  if (stack.length > 0) {
    maxd = -1;
  }

  return maxd;
}
