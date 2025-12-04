/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  let pin = code
    .replaceAll("[", "")
    .split("]")
    .slice(0, -1)
    .reduce((acc, curr, i) => {
      let res = 0;

      for (let char of curr) {
        if (!isNaN(char)) {
          res = Number(char);
        } else {
          if (char === "+") {
            res++;
          } else if (char === "-") {
            res--;
          } else if (char === "<") {
            res = Number(acc[i - 1]);
          }
        }
      }

      res = ((res % 10) + 10) % 10;

      return `${acc}${res}`;
    }, "");

  return pin.length !== 4 ? null : pin;
}
