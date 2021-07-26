import Leaderboard from './js/leaderboard.js';
import './style.css';

const addForm = document.querySelector('form');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const refresh = document.querySelector('button');
const leaderboard = new Leaderboard();

let gameId;
function startGame() {
  leaderboard
    .startGame('Term Project')
    .then((response) => response.result.split(' '))
    .then((res) => {
      [gameId] = [res[3]];
    })
    .catch((err) => console.err(err));
}

function getScores() {
  leaderboard.getScores(gameId).then((response) => console.log(response.result));
}

function postScore(e) {
  leaderboard
    .postScore(gameId, nameInput.value, scoreInput.value)
    .then((response) => console.log(response));
  e.preventDefault();
}

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', postScore);
refresh.addEventListener('click', getScores);
