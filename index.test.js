const Grid = require("./Grid");
const Robot = require("./Robot");

describe("Should do robot stuff, beep boop bop", () => {
  it("Check mission report outputs correct values", () => {
    const grid = new Grid(5, 3);
    const robot1 = new Robot(1, 1, "E", ["R", "F", "R", "F", "R", "F", "R", "F"]);
    robot1.run(grid);
    const robot2 = new Robot(3, 2, "N", ["F", "R", "R", "F", "L", "L", "F", "F", "R", "R", "F", "L", "L"]);
    robot2.run(grid);
    const robot3 = new Robot(0, 3, "W", ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"]);
    robot3.run(grid);
    expect(robot1.missionReport()).toBe("1 1 E");
    expect(robot2.missionReport()).toBe("3 3 N LOST");
    expect(robot3.missionReport()).toBe("2 3 S");
  });
});
