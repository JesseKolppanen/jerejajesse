# Project Phase 2 - Basic Structure and Main Functionalities

## 1. Environment
- Development environment set up using VS Code.
- Git and GitHub for version control and collaboration.
- Project runs in browser and consists of static HTML, CSS, and JavaScript files for frontend.

## 2. Backend
- Backend implemented with Node.js.

## 3. Frontend
- Pure HTML, CSS, and JavaScript.
- Each game has its own HTML file (e.g., `index.html`, `blackjack.html`).

**Example:**
```html
<!-- index.html -->
<a href="blackjack.html" class="btn blackjack">BLACKJACK</a>
```

- Buttons link to different game pages for navigation.

## 4. Database
- Not yet implemented.
- Planned MongoDB usage to store scores, players, and sessions.

## 5. Basic Structure and Architecture
- Project folder structure is flat:
```
/ (root)
| server.js
| package.json
| package-lock.json
| /(public)
│|   index.html
||   blackjack.css
│|   blackjack.html
│|   blackjack.js
||   slots.html
||   slots.js
│|   styles.css
│|   script.js
||   terms.html
```
- JavaScript files handle game logic (e.g., `blackjack.js`).
- HTML pages link to JS and CSS files.

## 6. Functionalities
- Working Blackjack game.
- Player and dealer get cards, scores are calculated, and the outcome is shown.

**Example from `blackjack.js`:**
```javascript
function hit() {
    playerCards.push(deck.pop());
    const score = calculateScore(playerCards);
    if (score > 21) {
        updateView('Hävisit! Yli 21.');
    } else {
        updateView('Ota lisää tai jää.');
    }
}
```
- Player clicks "Ota kortti", and a new card is drawn. If score > 21, game ends with loss.

## 7. Code Quality and Documentation
- JS code is modular and readable.
- Functions are named clearly (e.g., `startGame`, `shuffle`, `calculateScore`).
- Comments added to explain logic.

**Example:**
```javascript
// Create a new shuffled deck of cards
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['A', '2', ..., 'K'];
    // ...
}
```

## 8. Testing and Error Handling
- Manual browser testing.
- Basic error checking for busts in Blackjack (score > 21).
- Console used for debugging during development.

**Example:**
```javascript
while (score > 21 && aces > 0) {
    score -= 10; // Change A from 11 to 1
    aces--;
}
```

## 9. User Interface and Interaction
- Simple and fun casino-style UI.
- Game has headers, instructions, buttons, and card visuals.

**Example from `blackjack.html`:**
```html
<div class="menu">
    <button onclick="startGame()">Uusi peli</button>
    <button onclick="hit()">Ota kortti</button>
    <button onclick="stand()">Jää</button>
</div>
```
- Interactive buttons call JS functions to control game flow.
- Visual feedback provided through updated card displays and status messages.

