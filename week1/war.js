//Deck of cards to be shuffled and used in the game
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = [
    "A","K","Q","J",
    "2", "3", "4", "5", "6",
    "7", "8", "9", "10",
];
const cardValueMap = {
    '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
    'J': 11, 'Q': 12, 'K': 13, 'A': 14
}

function createDeck() {
    let deck = [];
    for (let suit of suits){
        for (let value of values) {
            deck.push({ value: value, suit: suit, cardValue: cardValueMap[value]})
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; 
    }
    return deck;
}

//players that cards will be dealt to before gameplay begins

function dealCards(deck) {
    const player1Deck = deck.slice(0, 26);
    const player2Deck = deck.slice(26, 52);
    return { player1Deck, player2Deck};
}

//Gameplay

function playWarGame() {
    let deck = createDeck();
    deck = shuffleDeck(deck);
    const { player1Deck, player2Deck} = dealCards(deck);

    let player1Score = 0;
    let player2Score = 0;
    let round = 1;

//loop to iterate through 26 rounds until deck is depleated

    while (player1Deck.length > 0 && player2Deck.length > 0) {
        const player1Card = player1Deck.shift(); // Draw a card
        const player2Card = player2Deck.shift(); // Draw a card

        console.log(`Round ${round}:`);
        console.log(`Player 1 plays ${player1Card.value} of ${player1Card.suit}`);
        console.log(`Player 2 plays ${player2Card.value} of ${player2Card.suit}`);

        if (player1Card.cardValue > player2Card.cardValue) {
            player1Score++;
            console.log('Player 1 wins this round!');
        } else if (player1Card.cardValue < player2Card.cardValue) {
            player2Score++;
            console.log('Player 2 wins this round!');
        } else {
            console.log('It\'s a tie! No one wins this round.');
        }

        console.log('Current Scores:');
        console.log(`Player 1: ${player1Score} | Player 2: ${player2Score}`);
        console.log('--------------------------------');

        round++;

    }

    //final message displayed based on the outcome of the game

    if (player1Score > player2Score) {
        console.log('Player 1 is the winner!');
    } else if (player1Score < player2Score) {
        console.log('Player 2 is the winner!');
    } else {
        console.log('Nobody wins! It\'s a tie game!');
    }
}

playWarGame();