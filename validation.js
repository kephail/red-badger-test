const validateGridInput = input => {
  const valid = input.match(/^(?:[1-9]|[1-4][0-9]|50) (?:[1-9]|[1-4][0-9]|50)$/);

  if (valid) {
    return true;
  }

  return 'Grid input must be two numbers; between 1 and 50, separated by a space (eg: "8 31")';
};

const validateRobotInstructions = input => {
  const valid = input.match(/^[lLrRfF]{1,100}$/);

  if (valid) {
    return true;
  }

  return 'Robot instructions must be a series of the letters “L”, “R”, and “F”, without spaces. (eg: "FRRFLLFFRRFLL")';
};

const validateRobotStartingPosition = input => {
  const valid = input.match(/^(?:[0-9]|[1-4][0-9]|50) (?:[0-9]|[1-4][0-9]|50) [NnSsEeWw]$/);

  if (valid) {
    return true;
  }

  return 'Robot starting position must consist of two numbers and and an orientation (N, S, E, W), all separated by a space (eg: "3 5 N").';
};

module.exports = {
  validateGridInput,
  validateRobotInstructions,
  validateRobotStartingPosition,
};
