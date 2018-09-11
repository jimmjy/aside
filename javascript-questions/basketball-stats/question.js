// Getting stats from the Raptors last game in the 2018 season
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Requirements
// 1. There are 4 functions to fill in.
// 2. Some funtions will use other funtions to complete their answers
// 3. Avoid using for, forEach, for...in or for...of
// 4. Run the file using `node question.js` in your terminal and you will see the output



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 1. Count all the points a team had in the game.
//   - Write a function to count the total points Raptors had per quarter
//     - 1st quarter - 26
//     - 2nd quarter - 21
//     - 3rd quarter - 25
//     - 4th quarter - 21

const totalScore = (pointsPerQuarter) => {
  let score = 0;
  let fullGameScore = pointsPerQuarter.map((points) => {
    score += points;
  });
  return score;
};

const raptorsScore = totalScore([26, 21, 25, 21]);
console.log('Total Score', raptorsScore);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 2. Get the average points per starting player
//   - Write a function to get get the average points scored by the starting raptors
const startingPlayers = {
  ibaka: { points: 12 },
  miles: { points: 13 },
  anunoby: { points: 2 },
  lowry: { points: 5 },
  derozen: { points: 13 }
};

const getAveragePoints = (players) => {
  // a counter to hold total score for numerator of average calculation
  let totalPlayerScores = 0;
  // going to create a new array with the point objects extract, easier to use the array after
  const pointsArray = Object.values(players);

  //using pointsArray going to create a constant for the denominator to find average score
  const averagePlayers = pointsArray.length;
  
  //update totalPlayerScores with all the points to calculate average
  const totalPoints = pointsArray.map((playerPoints) => {
    return totalPlayerScores += playerPoints.points;
  });

  //return scoring average
  return totalPlayerScores / averagePlayers;
};

const averageScore = getAveragePoints(startingPlayers);
console.log('Scoring Average', averageScore);


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Remove the starting players who scored less than the average 
//   - Write a function to remove the starting players who scored less than the average
//   - The return value of the function should be in the same format as the `startingPlayers` 
//     object above
//   - Make use of `startingPlayers` and `averageScore` that were created in question 2

const getHighestScorers = (players, threshold) => {
  
  console.log(Object.value(players).points);
};

const highestScoringPlayers = getHighestScorers(startingPlayers, averageScore);
console.log('Highest Scoring Players', highestScoringPlayers);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 4. Add time played each quarter to each player
//   - The time represents the total time they played in the game, assuming they played the 
//     amount of time each quarter, add a `perQuarter` field to each player.

const timePlayed = [
  {
    name: 'ibaka',
    time: 18
  },
  {
    name: 'miles',
    time: 23
  },
  {
    name: 'anunoby',
    time: 20
  },
  {
    name: 'lowry',
    time: 30
  },
  {
    name: 'derozen',
    time: 30
  },
]

const addTimePlayedPerQuarter = (timePlayedArr) => {
  // @TODO
}

const timePerQuarter = addTimePlayedPerQuarter(timePlayed);
console.log('Players with time per quarter', timePerQuarter);
