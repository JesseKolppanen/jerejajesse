// Korttipakka ja molempien pelaajien kortit
let deck = [];
let playerCards = [];
let dealerCards = [];

// Luo korttipakan (52 korttia)
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣']; // Maa: pata, hertta, ruutu, risti
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; // Korttien arvot
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({ suit, value }); // Lisää jokainen kortti pakkaan oliona
        }
    }
    shuffle(deck); // Sekoitetaan pakka
}

// Sekoittaa korttipakan satunnaisesti (Fisher-Yates -algoritmi)
function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Vaihdetaan korttien paikkoja
    }
}

// Palauttaa yksittäisen kortin pistemäärän
function getCardValue(card) {
    if (['J', 'Q', 'K'].includes(card.value)) return 10; // J, Q, K = 10 pistettä
    if (card.value === 'A') return 11; // Ässä aluksi 11 pistettä
    return parseInt(card.value); // Numerokortit palautetaan numerona
}

// Laskee kokonaispistemäärän annetulle korttijoukolle
function calculateScore(cards) {
    let score = 0;
    let aces = 0;
    for (let card of cards) {
        let value = getCardValue(card);
        score += value;
        if (card.value === 'A') aces++; // Lasketaan ässät
    }
    // Jos pistemäärä ylittää 21 ja mukana on ässiä, muutetaan ne 1:ksi
    while (score > 21 && aces > 0) {
        score -= 10;
        aces--;
    }
    return score;
}

// Piirtää kortit näkyville sivulle (HTML-elementtiin)
function renderCards(containerId, cards) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Tyhjennetään vanhat kortit
    for (let card of cards) {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerText = card.value + card.suit; // Esim. "A♠" tai "10♥"
        container.appendChild(div);
    }
}

// Päivittää pistemäärät näkymään
function updateScores() {
    document.getElementById('player-score').innerText = 'Pisteet: ' + calculateScore(playerCards);
    document.getElementById('dealer-score').innerText = 'Pisteet: ' + calculateScore(dealerCards);
}

// Päivittää koko näkymän (kortit, pisteet ja tila)
function updateView(statusText) {
    renderCards('player-cards', playerCards);
    renderCards('dealer-cards', dealerCards);
    updateScores();
    document.getElementById('status').innerText = statusText;
}

// Aloittaa uuden pelin
function startGame() {
    createDeck(); // Luodaan ja sekoitetaan pakka
    playerCards = [deck.pop(), deck.pop()]; // Pelaajalle 2 korttia
    dealerCards = [deck.pop(), deck.pop()]; // Jakajalle 2 korttia
    updateView('Peli alkoi! Ota kortti tai jää.');
}

// Pelaaja ottaa uuden kortin
function hit() {
    playerCards.push(deck.pop()); // Lisää kortti pelaajalle
    const score = calculateScore(playerCards);
    if (score > 21) {
        updateView('Hävisit! Yli 21.'); // Jos yli 21, peli hävitään
    } else {
        updateView('Ota lisää tai jää.');
    }
}

// Pelaaja lopettaa korttien ottamisen
function stand() {
    // Jakaja ottaa kortteja kunnes pistemäärä vähintään 17
    while (calculateScore(dealerCards) < 17) {
        dealerCards.push(deck.pop());
    }

    const playerScore = calculateScore(playerCards);
    const dealerScore = calculateScore(dealerCards);

    // Päätetään pelin tulos
    if (dealerScore > 21 || playerScore > dealerScore) {
        updateView('Voitit!');
    } else if (playerScore < dealerScore) {
        updateView('Hävisit!');
    } else {
        updateView('Tasapeli!');
    }
}

// Siirtyy takaisin etusivulle
function goBack() {
    window.location.href = "index.html";
}
