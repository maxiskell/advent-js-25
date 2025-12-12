/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
  let roundLen = Math.min(elf1.length, elf2.length);
  let hp1 = 3;
  let hp2 = 3;

  function getDamage(move1, move2) {
    if (move1 === "A" && move2 !== "B") {
      return 1;
    } else if (move1 === "F") {
      return 2;
    }

    return 0;
  }

  for (let i = 0; i < roundLen; ++i) {
    hp1 -= getDamage(elf2[i], elf1[i]);
    hp2 -= getDamage(elf1[i], elf2[i]);

    if (hp1 <= 0 && hp2 <= 0) {
      return 0;
    }

    if (hp1 <= 0) {
      return 2;
    }

    if (hp2 <= 0) {
      return 1;
    }
  }

  if (hp1 > hp2) {
    return 1;
  } else if (hp1 < hp2) {
    return 2;
  } else {
    return 0;
  }
}
