class UI {
  constructor() {
    this.list = document.querySelector('.score-list');
  }

  addToUI(arr) {
    this.list.innerHTML = '';
    arr.forEach((el) => {
      this.list.innerHTML += `
          <li class="item">${el.user} : ${el.score}</li>
          `;
    });
  }
}

export default UI;
