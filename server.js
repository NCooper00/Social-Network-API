const express = require('express');
const db = require('./config/connection');
const routes = require('./routes/api/');

// const db = require('./config/connection');


const PORT = 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
});
