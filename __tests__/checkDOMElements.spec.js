const Player = require("C:\\Users\\user\\Downloads\\functions\\player.js");
const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync(
  "C:\\Users\\user\\Downloads\\functions\\index.html"
);
require("C:\\Users\\user\\Downloads\\functions\\rpssim.js");

const Game = require("C:\\Users\\user\\Downloads\\functions\\rpssim.js");
const page = require("C:\\Users\\user\\Downloads\\functions\\rpssim.js");
const GameVisuals = require("C:\\Users\\user\\Downloads\\functions\\gameVisuals.js");

describe("getting name", () => {
  test("return the name of the player", () => {
    const brutus = new Player("Brutus");
    expect(brutus.getName()).toBeTruthy();
    expect(brutus.getName()).toBe("Brutus");
  });
});

describe("checking return of", () => {
  test("player getname return", () => {
    const brutus = new Player("Brutus");
    const spy1 = jest.spyOn(brutus, "getName");
    brutus.getName();
    expect(spy1).toHaveReturned();
  });
  describe("checking if fn was called", () => {
    test("spy and check method", () => {
      const julius = new Player("Julius");
      const spy1 = jest.spyOn(julius, "getHand");
      julius.getHand();
      expect(spy1).toHaveBeenCalled();
    });
  });
  describe("getting name", () => {
    test("return the name of the player", () => {
      const brutus = new Player("Brutus");
      expect(brutus.getName()).toBeTruthy();
    });
  });
  describe("length of choices list", () => {
    test("see how long the node list is", () => {
      const game = new Game(new Player("Julius"), new Player("Brutus"));
      const userInterface = new GameVisuals(game);
      expect(userInterface.choiceSelector).toHaveLength(2);
    });
  });
});
