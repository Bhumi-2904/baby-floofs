const express = require('express');
const app = express();
const path = require('path');
const pets = require('./data_pet.json');

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
const port = 8080;

app.set('view engine', "ejs");

app.get('/', (req, res) => {
    res.render("home");
});

app.get('/pets', (req, res) => {
    res.render("pets", { pets });
});

app.get('/pets/:id', (req, res) => {
    const id = req.params.id;
    const pet = pets[id];

    if (!pet) {
        return res.render("not-found", { message: "Pet Not Found!" });
    }

    res.render("pet-details", { pet });
});


app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});


app.listen(port, () => {
    console.log("listening on port " + port);
});