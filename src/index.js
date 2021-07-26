import Leaderboard from './js/leaderboard.js';
import './style.css';

const addForm = document.querySelector('form');
// const nameInput = document.querySelector('#name');
// const scoreInput = document.querySelector('score');
// const refresh = document.querySelector('button');
const leaderboard = new Leaderboard();

function startGame() {
  leaderboard
    .startGame('futbol')
    .then((response) => response.result.split(' '))
    .then((res) => console.log(res[3]))
    .catch((err) => console.err(err));
}

function postScore() {
  // post scores to API
}

document.addEventListener('DOMContentLoaded', startGame);
addForm.addEventListener('submit', postScore);
