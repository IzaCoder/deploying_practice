const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));

// set up homepage route
app.get("/", (req, res) => {
    res.send("This is the homepage");
});

// set up second page
app.get("/second", (req, res) => {
    res.send("This is the second page");
});

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});