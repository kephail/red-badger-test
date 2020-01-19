class Robot {
  constructor(x, y, orientation, instructions) {
    this.status = STATUS.ON_STANDBY;
    this.position = {
      x,
      y,
    };
    this.orientation = orientation;
    this.instructions = instructions;
  }

  run(grid) {
    for (const instruction of this.instructions) {
      switch (instruction) {
        case INSTRUCTIONS.FORWARD:
          this.moveForward(grid);
          break;
        case INSTRUCTIONS.LEFT:
          this.turnLeft();
          break;
        case INSTRUCTIONS.RIGHT:
          this.turnRight();
          break;
        default:
          throw "Oops, seems our validation didn't work and our robot got an incorrect instruction";
      }
      if (this.status === STATUS.LOST) break;
    }
  }

  moveForward(grid) {
    const previousPosition = { ...this.position };

    switch (this.orientation) {
      case ORIENTATION.NORTH:
        this.position.y++;
        break;
      case ORIENTATION.EAST:
        this.position.x++;
        break;
      case ORIENTATION.SOUTH:
        this.position.y--;
        break;
      case ORIENTATION.WEST:
        this.position.x--;
        break;
    }
    if (
      this.position.x > grid.maxX ||
      this.position.y > grid.maxY ||
      this.position.x < grid.minX ||
      this.position.y < grid.minY
    ) {
      this.position = { ...previousPosition };
      const scentFound = this.checkForScents(grid);
      if (!scentFound) {
        this.reportLost(grid, previousPosition);
      }
    }
  }

  turnLeft() {
    switch (this.orientation) {
      case ORIENTATION.NORTH:
        this.orientation = ORIENTATION.WEST;
        break;
      case ORIENTATION.EAST:
        this.orientation = ORIENTATION.NORTH;
        break;
      case ORIENTATION.SOUTH:
        this.orientation = ORIENTATION.EAST;
        break;
      case ORIENTATION.WEST:
        this.orientation = ORIENTATION.SOUTH;
        break;
    }
  }

  turnRight() {
    switch (this.orientation) {
      case ORIENTATION.NORTH:
        this.orientation = ORIENTATION.EAST;
        break;
      case ORIENTATION.EAST:
        this.orientation = ORIENTATION.SOUTH;
        break;
      case ORIENTATION.SOUTH:
        this.orientation = ORIENTATION.WEST;
        break;
      case ORIENTATION.WEST:
        this.orientation = ORIENTATION.NORTH;
        break;
    }
  }

  checkForScents(grid) {
    // TODO: What about corners? Does orientation matter?
    for (const scent of grid.scents) {
      const { x, y } = this.position;
      if (x === scent.x && y === scent.y) {
        return true;
      }
    }
    return false;
  }

  reportLost(grid, previousPosition) {
    this.status = STATUS.LOST;
    grid.scents.push({
      ...previousPosition,
    });
  }

  stop() {
    this.status = STATUS.STOPPED;
  }

  missionReport() {
    let output = `${this.position.x} ${this.position.y} ${this.orientation}`;
    if (this.status === STATUS.LOST) output += ` ${STATUS.LOST}`;
    return output;
  }
}

const STATUS = {
  ON_STANDBY: "onStandby",
  RUNNING: "running",
  COMPLETE: "complete",
  LOST: "LOST",
};

const ORIENTATION = {
  NORTH: "N",
  EAST: "E",
  SOUTH: "S",
  WEST: "W",
};

const INSTRUCTIONS = {
  FORWARD: "F",
  RIGHT: "R",
  LEFT: "L",
};

module.exports = Robot;
