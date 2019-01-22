const brain = require('brain.js');


const network = new brain.NeuralNetwork();

//traning data
// network.train([
//   { input: [0,0,0], output: [0] },
//   { input: [0,0,1], output: [0] },
//   { input: [0,1,0], output: [0] },
//   { input: [1,0,1], output: [1] },
//   { input: [1,1,1], output: [1] },
// ]);

network.train([
  //output of 1 === 2nd team  wins, output of 0 === 1st wins,
  { input: [1,2], output: [1] }, //team 2 wins
  { input: [1,3], output: [1] }, //team 3 wins
  { input: [2,3], output: [0] }, //team 2 wins
  { input: [2,4], output: [1] }, //team 4 wins
  { input: [1,2], output: [0] }, //team 1 wins
  { input: [1,3], output: [0] }, //team 4 wins
  { input: [3,4], output: [0] }, //team 4 wins
]);

const result = network.run([1,4]);

console.log(`Prob: ${result}`)