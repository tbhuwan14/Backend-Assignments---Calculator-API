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

const isNumber = (num1, num2) => isNaN(num1) || isNaN(num2);
const isSmallerThanAsked = (num1, num2) => num1 <= -1000000 || num2 <= -1000000;
const isGreaterThanAsked = (num1, num2) => num1 >= 1000000 || num2 >= 1000000;

app.post("/add", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (isNumber(num1, num2)) {
    return res.send("invalid data types");
  }
  if (isSmallerThanAsked(num1, num2)) {
    return res.send("Underflow");
  }
  if (isGreaterThanAsked(num1, num2)) {
    return res.send("Overflow");
  }

  res.send(
    JSON.stringify({
      status: "success" | "failure" | "error",
      message: "the sum of given two numbers",
      sum: num1 + num2,
    })
  );
});

app.post("/sub", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (isNumber(num1, num2)) {
    return res.send("invalid data types");
  }
  if (isSmallerThanAsked(num1, num2)) {
    return res.send("Underflow");
  }
  if (isGreaterThanAsked(num1, num2)) {
    return res.send("Overflow");
  }

  res.send(
    JSON.stringify({
      status: "success" | "failure" | "error",
      message: "the sum of given two numbers",
      difference: num1 - num2,
    })
  );
});

app.post("/multiply", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (isNumber(num1, num2)) {
    return res.send("invalid data types");
  }
  if (isSmallerThanAsked(num1, num2)) {
    return res.send("Underflow");
  }
  if (isGreaterThanAsked(num1, num2)) {
    return res.send("Overflow");
  }

  res.send(
    JSON.stringify({
      status: "success" | "failure" | "error",
      message: "the sum of given two numbers",
      result: num1 * num2,
    })
  );
});

app.post("/divide", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  if (isNumber(num1, num2)) {
    return res.send("invalid data types");
  }
  if (num2 == 0) {
    return res.send("Cannot divide by zero");
  }
  if (isSmallerThanAsked(num1, num2)) {
    return res.send("Underflow");
  }
  if (isGreaterThanAsked(num1, num2)) {
    return res.send("Overflow");
  }

  res.send(
    JSON.stringify({
      status: "success" | "failure" | "error",
      message: "the sum of given two numbers",
      result: num1 / num2,
    })
  );
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
