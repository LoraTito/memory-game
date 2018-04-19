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

/* nodelist of all cards */
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

/* letiables for timer */
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
    allCardsArray = shuffle(allCardsArray);
    let holder = [];
    for (let i = 0; i < allCardsArray.length; i++) {
        deck.innerHTML = '';
        holder.forEach.call(allCardsArray, function (item) {
            deck.appendChild(item);
        });
        allCardsArray[i].classList.remove('show', 'open', 'match', 'unmatched', 'disabled');
    }
    moves = 0;
    matches = 0;
    count.innerHTML = 0;
    for (let i = 0; i < beginCounting.length; i++) {
        beginCounting[i].style.visibility = 'visible';
    }
    /*starts/restarts timer */
    clearInterval(timePassed);
    hour = 0;
    minute = 0;
    second = 0;
    timer.innerHTML = hour + ' hours ' + minute + ' mins ' + second + ' secs';
    endTime.innerHTML = '';
    endMoves.innerHTML = '';
    endStar.innerHTML = '';
    openCards = [];
    isAnimating = false;
    modalSelector.classList.remove('show');
    gameTime();
}

/**
 * @description: Compare the cards and checks if they are the same ot not
 */
let openCard = function () {
    if (isAnimating) return;
    this.classList.toggle('open');
    this.classList.toggle('show');
    this.classList.toggle('disabled');
    openCards.push(this);
    let countCards = openCards.length;
    if (countCards === 2) {
        movesCounter();
        if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className) {
            matches++;
            for (let i = 0; i < 2; i++) {
                openCards[i].classList.add('match');
                openCards[i].classList.remove('show', 'open');
            }
            openCards = [];
        } else {
            notMatch();
        }
    }
    finished();
};

/**
 /* delay for cards
 */
function notMatch() {
    isAnimating = true;
    for (let i = 0; i < 2; i++) {
        openCards[i].classList.add('unmatched');
    }
    setTimeout(function () {
        isAnimating = false;
        for (let i = 0; i < openCards.length; i++) {
            openCards[i].classList.remove('show', 'open', 'unmatched', 'disabled');
        }
        openCards = [];
    }, 2000);
}

/**
 * @description: This code tracks the moves and adjusts the star rating.
 */
function movesCounter() {
    moves++;
    count.innerHTML = moves;
    if (moves < 30 && moves > 24) {
        beginCounting[2].style.visibility = 'collapse';
    } else if (moves > 30) {
        beginCounting[1].style.visibility = 'collapse';
    }
}

/**
 * @description: game timer
 */
function gameTime() {
    timePassed = setInterval(function () {
        timer.innerHTML = hour + ' hours ' + minute + ' mins ' + second + ' secs';
        second++;
        if (second === 60) {
            minute++;
            second = 0;
        }
        if (minute === 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

/**
 * @description: modal for when all cards are matched
 */
function finished() {
    if (matches === 8) {
        clearInterval(timePassed);
        endTime.innerHTML = timer.innerHTML;
        endMoves.innerHTML = count.innerHTML;
        endStar.innerHTML = starList.innerHTML;
        modalSelector.classList.add('show');
    }
}

/**
 * @description: loops through the cards and adds event listeners
 */
for (let i = 0; i < allCardsArray.length; i++) {
    stackCards = allCardsArray[i];
    stackCards.addEventListener('click', openCard);
}

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
