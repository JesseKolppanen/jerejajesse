function spin() {
    const emojis = ["🍒", "🍋", "🔔", "💎", "7️⃣", "🍀", "🎰"];
    const results = [
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)]
    ];

    document.getElementById("slot-display").innerText = results.join(" ");
    
    const status = document.getElementById("slot-status");
    if (results[0] === results[1] && results[1] === results[2]) {
        status.innerText = "JACKPOT! 🎉🎉🎉";
    } else if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
        status.innerText = "Lähes voitto...";
    } else {
        status.innerText = "Ei tällä kertaa 😢";
    }
}
