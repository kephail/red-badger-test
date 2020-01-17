const Grid = require("./Grid");
const Robot = require("./Robot");

const transformGridInput = input => {
  const inputs = input.split(" ");
  return new Grid(parseInt(inputs[0]), parseInt(inputs[1]));
};

const transformRobotStart = input => {
  const inputs = input.toUpperCase().split(" ");
  return {
    x: parseInt(inputs[0]),
    y: parseInt(inputs[1]),
    orientation: inputs[2],
  };
};

const transformRobotInstructions = instructions => instructions.toUpperCase().split("");

const transformRobotInput = input => {
  const robotStart = transformRobotStart(input.robotStart);
  const robotInstructions = transformRobotInstructions(input.robotInstructions);

  return new Robot(robotStart.x, robotStart.y, robotStart.orientation, robotInstructions);
};

module.exports = {
  transformGridInput,
  transformRobotInput,
};
