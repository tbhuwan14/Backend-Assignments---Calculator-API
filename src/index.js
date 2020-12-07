const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add", (req, res) => {
  req.send(req.body.sum);
});

app.post("/sub", (req, res) => {
  req.send(req.body.difference);
});

app.post("/multiply", (req, res) => {
  req.send(req.body.result);
});

app.post("/divide", (req, res) => {
  req.send(req.body.result);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
