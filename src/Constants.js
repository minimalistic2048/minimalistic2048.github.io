/**
 * Calculates the constraints of the title.
 * @param {number} width - width of window
 * @param {number} height - height of window
 */
export function calcTitleOffest(width, height) {
  return {
    leftRight: 0.16 * width,
    top: 0.04 * height,
  };
}

export function calcBlockSize(width) {
  return {
    height: 0.075 * width,
    width: 0.1 * width,
  };
}
