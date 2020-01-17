const inquirer = require("inquirer");
const { transformGridInput, transformRobotInput } = require("./transformers");
const questions = require("./questions");

async function askGridQuestions() {
  const answer = await inquirer.prompt(questions.gridSizeQuestions);
  return transformGridInput(answer.gridSize);
}

async function askRobotQuestions(answers = []) {
  const answer = await inquirer.prompt(questions.robotQuestions);
  answers.push(answer);
  if (answer.askAgain) {
    answers = await askRobotQuestions(answers);
  } else {
    answers = answers.map(robot => transformRobotInput(robot));
  }
  return answers;
}

async function main() {
  const grid = await askGridQuestions();
  const robots = await askRobotQuestions();

  for (const robot of robots) {
    robot.run(grid);
    console.log(robot.missionReport());
  }
}

main();
