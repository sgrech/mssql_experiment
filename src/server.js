/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on port ${3000}`);
  }
});
