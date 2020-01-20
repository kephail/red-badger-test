class Grid {
  constructor(maxX, maxY) {
    this.scents = [];
    this.mixX = 0;
    this.minY = 0;
    this.maxX = maxX;
    this.maxY = maxY;
  }

  isPositionOffGrid(position) {
    if (position.x > this.maxX || position.y > this.maxY || position.x < this.minX || position.y < this.minY) {
      return true;
    }
    return false;
  }
}

module.exports = Grid;
