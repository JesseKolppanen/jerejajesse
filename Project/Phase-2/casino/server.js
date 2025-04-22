const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');

// Luo Express-sovellus
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Tarjoa staattiset tiedostot (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Yhdistä MongoDB-tietokantaan
mongoose.connect('mongodb://localhost:27017/kasino', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB-yhteys onnistui!");
}).catch((err) => {
    console.log("Virhe MongoDB-yhteydessä: ", err);
});

// Mongoose-malli käyttäjälle
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

// Rekisteröintiprosessi
app.post('/signup', async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    // Tarkista, että salasanat täsmäävät
    if (password !== confirmPassword) {
        return res.status(400).send("Salasanat eivät täsmää");
    }

    // Tarkista, onko käyttäjätunnus jo käytössä
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).send("Käyttäjätunnus on jo käytössä");
    }

    // Kryptaa salasana
    const hashedPassword = await bcrypt.hash(password, 10);

    // Luo uusi käyttäjä
    const newUser = new User({
        username,
        password: hashedPassword,
    });

    // Tallenna käyttäjä
    await newUser.save();

    res.send("Rekisteröityminen onnistui! Voit nyt kirjautua sisään.");
});

// Kirjautumisprosessi
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Etsi käyttäjä
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(400).send("Käyttäjätunnus tai salasana virheellinen");
    }

    // Tarkista salasana
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Käyttäjätunnus tai salasana virheellinen");
    }

    res.send("Kirjautuminen onnistui! Tervetuloa takaisin.");
});

// Käynnistä serveri
app.listen(3000, () => {
    console.log("Palvelin käynnissä portissa 3000");
});
