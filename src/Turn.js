class Turn {
  constructor(guess, currentCard) {
    this.guess = guess,
    this.currentCard = currentCard,
    this.isCorrect;
  }
  returnGuess() {
    return this.guess
  }
  returnCard() {
    return this.currentCard
  }
  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      this.isCorrect = true
      return this.isCorrect
    } else {
      this.isCorrect = false
      return this.isCorrect
    }
  }
  giveFeedback() {
    console.log(this.isCorrect)
    if (this.isCorrect === true) {
      return "correct!"
    } else if (this.isCorrect === false) {
      return "incorrect!"
    }
  }
}


module.exports = Turn;
