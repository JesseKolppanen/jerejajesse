## 🌟 Super Upee Kasino

An educational simple online casino simulation featuring Blackjack and Slots games, built with HTML, CSS, and JavaScript.

---

## 📝 Project overview

This project is a small browser-based casino designed to practice basic web development skills.  
Target users are casual players who want quick and simple game experiences.  
The focus was on building working games with a clean user interface and modular JavaScript code.

---

## 📌 Use case summary

| Use Case | Implemented (Yes/No) | Demonstration / Notes |
|----------|----------------------|------------------------|
| User selects and plays a game | Yes | Blackjack and Slots available. |
| User views simple game rules | Yes | Instructions shown on each game page. |
| User sees game outcome (win/lose) | Yes | Blackjack game displays win/loss status after play. |
| User registration and login | No | Planned for future versions. |

---

## ✍️ Technical implementation

### Environment

- Developed using VS Code.
- Git and GitHub for version control.
- Project runs fully in the browser using static files.

### Backend

- Basic Node.js server created (`server.js`).
- No dynamic backend yet — games are frontend-driven.

### Frontend

- Built with pure HTML, CSS, and JavaScript.
- Each game (e.g., Blackjack) has its own HTML file (`blackjack.html`).

**Example navigation from `index.html`:**

```html
<a href="blackjack.html" class="btn blackjack">BLACKJACK</a>
```

### Architecture and Files

Flat project structure:

```
/ (root)
| server.js
| package.json
| /public
  | index.html
  | blackjack.html
  | blackjack.js
  | slots.html
  | slots.js
  | styles.css
  | script.js
  | terms.html
| /node_modules
```

- JavaScript handles game logic.
- HTML pages link to corresponding JS and CSS files.

### Functionality Example

In Blackjack, when the player clicks "Ota kortti", the `hit()` function is called:

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

---

## 🚂 Development process

- **Phase 1:** Planned user personas, user flows, and UI sketches.
- **Phase 2:**
  - Created static HTML and CSS templates.
  - Developed Blackjack game logic.
  - Built a basic Node.js server to serve static files.
  - Planned MongoDB usage for future score tracking (not yet implemented).
- Agile practices: regular check-ins and task updates on GitHub.

---

## ☀️ Reflection and future work

### What worked well

- Clear separation of game logic and UI.
- Smooth gameplay experience using simple browser technologies.

### Challenges

- Handling dynamic score calculations in Blackjack correctly.
- Deciding to delay backend database integration to stay within project scope.

### Future improvements

- Implement user login and persistent score saving with MongoDB.
- Improve mobile responsiveness.
- Add animations and sound effects to games.

---

## 📊 Work Hours Log

| Date       | Time | Task                                |
|------------|------|-------------------------------------|
| 4.4.2025   | 10h   | Set up project structure and server |
| 6.4.2025   | 8h   | Designed UI for index and games     |
| 9.4.2025   | 4h   | Developed Blackjack game logic      |
| 12.4.2025  | 10h   | Testing and debugging gameplay      |
| 15.4.2025  | 5h   | Styling and minor improvements      |
| **Total**  | **37h** |                                 |

---

## 🫢 Presentation link




