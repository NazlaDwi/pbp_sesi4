var motoGP = [
  { circuit: 'Losail', location: 'Qatar',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
  { circuit: 'Autodromo', location: 'Argentine',
    winner: { firstName: 'Cal', lastName: 'Crutchlow', country: 'UK' } },
  { circuit: 'De Jerez', location: 'Spain',
    winner: { firstName: 'Valentino', lastName: 'Rossi', country: 'Italy' } },
  { circuit: 'Mugello', location: 'Italy',
    winner: { firstName: 'Andrea', lastName: 'Dovizioso', country: 'Italy' } },
];

let result = {};

for (let i = 0; i < motoGP.length; i++) {
  const event = motoGP[i];
  const country = event.winner.country;

  if (!result[country]) {
    result[country] = { winningCircuits: [], totalWin: 0 };
  }

  result[country].winningCircuits.push({
    name: `${event.winner.firstName} ${event.winner.lastName}`,
    winLocation: `${event.circuit}, ${event.location}`,
  });
  result[country].totalWin++;
}

console.dir(result, { depth: null });