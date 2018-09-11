const startingPlayers = {
    ibaka: { points: 12 },
    miles: { points: 13 },
    anunoby: { points: 2 },
    lowry: { points: 5 },
    derozen: { points: 13 }
  };

  const threshold = 9;

const getHighestScorers = (players, threshold) => {
    
    const pointArr = Object.values(players);

    console.log(pointArr);

    

    
};

const highestScoringPlayers = getHighestScorers(startingPlayers, 9);
console.log('Highest Scoring Players', highestScoringPlayers);
