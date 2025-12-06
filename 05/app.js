/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  function elfDateToDate(elfDate) {
    let replaceMap = {
      "*": "-",
      "|": ":",
      "@": "T",
      " NP": "Z",
    };

    let parsed = elfDate.replace(/[*|@]| NP/g, (match) => replaceMap[match]);

    return new Date(parsed);
  }

  let from = elfDateToDate(fromTime);
  let to = elfDateToDate(takeOffTime);

  return Math.floor((to - from) / 1_000);
}
