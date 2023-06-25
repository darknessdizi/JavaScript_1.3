class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timer = container.querySelector(".timer");

    this.reset();

    this.registerEvents();
  }

  setTimer() {
    this.timer.textContent = this.wordElement.textContent.length;
    this.idInterval = setInterval(() => {
      if (this.timer.textContent == 0) {
        alert("Время вышло!!!");
        clearInterval(this.idInterval);
        this.reset();
      };
      this.timer.textContent -= 1; 
    }, 1000);
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    window.addEventListener('keyup', (event) => {    
      if (['Shift', 'Alt', 'CapsLock', 'Control'].includes(event.key)) {
        return false;
      }
      if (this.currentSymbol.textContent.charCodeAt() == 32) {
        this.currentSymbol.className = 'space';
      };
      if (event.key.toLowerCase() == this.currentSymbol.textContent.toLowerCase()) {
        this.success();
      } else {
        this.fail();
      }
    });
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      clearInterval(this.idInterval);
      this.reset();
    }
    clearInterval(this.idInterval);
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      clearInterval(this.idInterval);
      this.reset();
    }
    clearInterval(this.idInterval);
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
    this.setTimer();
  }

  getWord() {
    const words = [
        'bob саша',
        'awesome лиза',
        'netology аня',
        'hello катя',
        'kitty мила',
        'rock маша',
        'Youtube ира',
        'popcorn юля',
        'cinema ксюша',
        'love таня',
        'javascript лена'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));