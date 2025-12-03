/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
  // Code here
  return giftsToProduce
    .filter(({ quantity }) => !isNaN(quantity) && quantity > 0)
    .reduce(
      (acc, { toy, quantity }) => [...acc, ...Array(quantity).fill(toy)],
      [],
    );
}
