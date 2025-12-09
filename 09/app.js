/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  let map = board.split("\n").map((row) => row.split(""));
  let moveList = moves.split("");

  let row = 0;
  let col = 0;

  for (let r = 0; r < map.length; ++r) {
    let c = map[r].findIndex((char) => char === "@");

    if (c !== -1) {
      row = r;
      col = c;
    }
  }

  let dirs = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };

  for (let move of moveList) {
    let [dr, dc] = dirs[move] ?? [0, 0];
    row += dr;
    col += dc;

    let cell = map[row]?.[col];

    if (!cell || cell === "#") {
      return "crash";
    }

    if (cell === "*") {
      return "success";
    }
  }

  return "fail";
}
