class Player {
  constructor(name) {
    this.name = name;
    this.points = 0;
  }

  getName() {
    return this.name;
  }

  getHand() {
    return this.hand;
  }

  wonGame() {
    this.points++;
  }

  resetPoints() {
    this.points = 0;
  }
}

module.exports = Player;
