/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on     the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
/* scores the deck of cards */
const deck = document.querySelector('.deck');

/* all cards */
let stackCards = document.querySelectorAll('.card');

/* creates array initialized to stackCards */
let allCardsArray = [...stackCards];

/* initial moves count */
let moves = 0;

/* accesses the 'moves' class to set up event listeners */
let count = document.querySelector('.moves');

/* adds stars to array for rating */
const beginCounting = document.querySelectorAll('.fa-star');

/* counts number of cards matched */
let matches = 0;

/* accesses the timer at the top of the game */
let timer = document.querySelector('.gameTimer');

/* array to hold open cards */
let openCards = [];

/* timer */
let second = 0;
let minute = 0;
let hour = 0;
let timePassed;

/* allows additional card clicks to be disabled during animations */
let isAnimating = true;

/* accesses class "rating" in html */
let endStar = document.querySelector('.rating');

/*accesses the ending time for the modal display */
let endTime = document.querySelector('.endTime');

/*accesses the amount of moves for the modal display */
let endMoves = document.querySelector('.totalMoves');

/* accesses stars to set up for modal*/
let starList = document.querySelector('.stars');

/* accesses the class "modal" from html */
let modalSelector = document.querySelector('.modal');

/* targets "replay" at top right of screen and triggers displayCards on click */
let replayButton = document.querySelector('.replay');
replayButton.onclick = displayCards;

/* shuffles and displays cards face down upon game load */
document.body.onload = displayCards;
/**
 * @description: changes .restart to a clickable event which triggers the
 * function displayCards
 */
let replayGame = document.querySelector('.restart');
replayGame.onclick = displayCards;

/**
 * @description: Shuffle function from http://stackoverflow.com/a/2450976
 * @param: Name: array, type: array
 * @returns: randomized array
 */
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/**
 * @description: shiffle cards and display them face down
 */
function displayCards() {
    // let currentCards = shuffle(allCardsArray);
    // console.log(currentCards);
    // for (let i = 0; i < currentCards.length; i++) {
    //     let thisCard = currentCards[i];
    //     console.log(thisCard);
    //     openCard(thisCard);
    let element = document.getElementById("card");
    element.onclick.classList.add("open");
        // thisCard.classList.toggle("open").toggle("show");

        // var element = document.getElementById("myDIV");
        // element.classList.toggle("mystyle");
        // currentCards[i].onclick.classList.toggle("show");
    // }
    // function(card) {
    //     card.classList.toggle("open");
    //     card.classList.toggle("show");
}

function openCard(card) {
    card.classList.toggle('open');
    // this.card.toggle('show');
    // this.classList.toggle('disabled');
}

/**
 * @description: Compare the cards and checks if they are the same ot not
 */


/**
 /* delay for cards
 */

/**
 * @description: This code tracks the moves and adjusts the star rating.
 */

/**
 * @description: game timer
 */


/**
 * @description: modal for when all cards are matched
 */


/**
 * @description: loops through the cards and adds event listeners
 */


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
