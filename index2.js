const brain = require('brain.js');
const data = require('./data.json');


const network = new brain.recurrent.LSTM();

//mapping through data in jason file
const trainingData = data.map(item => ({
  input: item.text,
  output: item.category
}));

//setting the congif to only do 2000 iterations (20,000 by default)
network.train(trainingData, {
  iterations: 2000
})

const result = network.run('I fixed the power supply');

console.log(`Category: ${result}`);