const players = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = (players) =>
  players.reduce((total, { playtime, gamesPlayed }) => {
    total += playtime / gamesPlayed;
    return total;
  }, 0);

console.log(totalAveragePlaytimePerGame(players));
