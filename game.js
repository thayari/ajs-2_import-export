import Character from './domain.js';

class Game {
  start() {
    console.log('Game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

export default Game;
export {GameSavingData, readGameSaving, writeGameSaving};