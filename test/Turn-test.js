const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be able to instantiate a new turn', function() {
    const currentCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("object", currentCard);
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to return the user/s guess', function() {
    const currentCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("array", currentCard);

    turn.returnGuess()

    expect(turn.guess).to.equal("array");
  });

  it('should be able to return the current card', function() {
    const currentCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn = new Turn("array", currentCard);

    turn.returnCard()

    expect(turn.currentCard).to.equal(currentCard);
  });

  it('should be able to decide if the guess is the correct answer', function() {
    const currentCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn("array", currentCard);
    const turn2 = new Turn("object", currentCard);

    turn1.evaluateGuess()
    turn2.evaluateGuess()

    expect(turn1.isCorrect).to.equal(false);
    expect(turn2.isCorrect).to.equal(true);
  });

  it('should be able to communicate the outcome of the guess', function() {
    const currentCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const turn1 = new Turn("array", currentCard);
    const turn2 = new Turn("object", currentCard);

    turn1.evaluateGuess()
    turn2.evaluateGuess()

    turn1.giveFeedback()
    turn2.giveFeedback()

    expect(turn1.giveFeedback()).to.equal("incorrect!");
    expect(turn2.giveFeedback()).to.equal("correct!");
  });
});
