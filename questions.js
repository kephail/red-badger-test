const { validateGridInput, validateRobotInstructions, validateRobotStartingPosition } = require("./validation");

module.exports = {
  gridSizeQuestions: [
    {
      type: "input",
      name: "gridSize",
      message: "Please enter upper-right coordinates of the grid.",
      default: "5 3",
      validate: validateGridInput,
    },
  ],
  robotQuestions: [
    {
      type: "input",
      name: "robotStart",
      message: "What's the input for the robots starting position?",
      validate: validateRobotStartingPosition,
    },
    {
      type: "input",
      name: "robotInstructions",
      message: "What's the input for the robots instructions?",
      validate: validateRobotInstructions,
    },
    {
      type: "confirm",
      name: "askAgain",
      message: "Want to add another robot? (just hit enter for YES)",
      default: true,
    },
  ],
};
