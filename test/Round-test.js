const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');


describe('Round', function() {
  it('should be a function', function() {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it('should return the current card in play', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    round.returnCurrentCard()

    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should create a new turn when a guess has been made and update the number of turns taken', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    round.takeTurn("object")

    expect(round.turns).to.equal(1);
  });

  it('should move to the next card when a turn is taken', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    round.takeTurn("object")

    expect(round.returnCurrentCard()).to.equal(card2);
  });

  it('should be able to record and evaluate guesses', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    round.takeTurn("object")
    expect(round.incorrectGuesses).to.deep.equal([]);

    round.takeTurn("function")
    expect(round.incorrectGuesses).to.deep.equal([2]);
  });

  it('should give feedback regarding whether the guess is correct or incorrect', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    expect(round.takeTurn("object")).to.equal("correct!");

    expect(round.takeTurn("function")).to.equal("incorrect!");
  });

  it('should be able to calculate the percent of correct responses', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    round.takeTurn("object")
    round.takeTurn("function")

    expect(round.calculatePercentCorrect()).to.equal(50);
  });

  it('should be able to end the round and communicate the percentage of correct responses', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    const deck = new Deck([card1, card2, card3])
    const round = new Round(deck);

    round.takeTurn("object")
    round.takeTurn("function")

    expect(round.endRound()).to.equal("Round over! You answered 50% of the questions correctly!");
  });
});
