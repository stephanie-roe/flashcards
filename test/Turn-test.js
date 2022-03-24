const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');


describe('Turn', function() {
  let currentCard;
  let turn1;
  let turn2;

  beforeEach(() => {
    currentCard = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    turn1 = new Turn("array", currentCard);
    turn2 = new Turn("object", currentCard);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be able to instantiate a new turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should be able to return the user/s guess', function() {
    turn1.returnGuess();

    expect(turn1.guess).to.equal("array");
  });

  it('should be able to return the current card', function() {
    turn1.returnCard();

    expect(turn1.currentCard).to.equal(currentCard);
  });

  it('should be able to decide if the guess is the correct answer', function() {
    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.isCorrect).to.equal(false);
    expect(turn2.isCorrect).to.equal(true);
  });

  it('should be able to communicate the outcome of the guess', function() {
    turn1.evaluateGuess();
    turn2.evaluateGuess();

    turn1.giveFeedback();
    turn2.giveFeedback();

    expect(turn1.giveFeedback()).to.equal("incorrect!");
    expect(turn2.giveFeedback()).to.equal("correct!");
  });
});
