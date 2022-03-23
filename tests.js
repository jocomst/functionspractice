// function outer() {
//   let a = "String";
//   let b = { name: "B" };
//   console.log(a, b);
//   function inner(a, b) {
//     console.log(a, b);
//     a = "Newer String";
//     b = { name: "new Object" };
//     b.name = "lol";
//     console.log(a, b);
//   }

//   inner(a, b);
//   console.log(a, b);
// }

// outer();

// const answer = ((base, exponent) => {
//   for (let i = exponent; i > 1; i--) {
//     base *= 2;
//   }
//   return base;
// })(2, 2);

// console.log(answer);

// function exponentRecursion(base, exponent) {
//   //   console.log(typeof base);
//   if (exponent == 0) return 1;
//   return (base *= exponentRecursion(base, exponent - 1));
// }

// console.log(exponentRecursion(2, 3));

//code from previous activities above

// ROCK PAPER SCISSORS

const hands = ["rock", "paper", "scissors"];

function getHand(arr) {
  return arr[Math.trunc(Math.random() * 3)];
}

const playRound = function (player1, player2) {
  const player1Hand = player1.getHand(hands);
  const player2Hand = player2.getHand(hands);
  console.log(
    `${player1.name} chose ${player1Hand} and ${player2.name} chose ${player2Hand}`
  );
  if (
    (player1Hand === "rock" && player2Hand === "scissors") ||
    (player1Hand === "paper" && player2Hand === "rock") ||
    (player1Hand === "scissors" && player2Hand === "paper")
  ) {
    console.log(`${player1.name} won the hand!`);
    return player1;
  } else if (player1Hand === player2Hand) {
    console.log(`It's a tie!`);
    return null;
  } else {
    console.log(`${player2.name} won the hand!`);
    return player2;
  }
};

const playGame = function (player1, player2, playUntil) {
  let player1Wins = playUntil;
  let player2Wins = playUntil;

  while (player1Wins > 0 && player2Wins > 0) {
    const winner = playRound(player1, player2);
    if (winner === player1) player1Wins--;
    if (winner === player2) player2Wins--;
  }

  if (player1Wins === 0) {
    console.log(`${player1.name} wins the game!`);
    return player1;
  } else {
    console.log(`${player2.name} wins the game!`);
    return player2;
  }
};

// console.log(getHand(hands));

const player1 = {
  name: "John",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

const player2 = {
  name: "Kalynn",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

const player3 = {
  name: "Noah",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

const player4 = {
  name: "Mary",
  getHand: (arr) => {
    return arr[Math.trunc(Math.random() * 3)];
  },
};

// playRound(player1, player2);
// playGame(player1, player2, 5);

const playTournament = function (
  player1,
  player2,
  player3,
  player4,
  playUntil
) {
  const winner1 = playGame(player1, player2, playUntil);
  const winner2 = playGame(player3, player4, playUntil);

  const playTournament = playGame(winner1, winner2, playUntil);
  console.log(`${playTournament.name} is the world champion!`);
};

playTournament(player1, player2, player3, player4, 3);
