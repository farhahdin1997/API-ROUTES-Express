// TODO: Import express
const express = require('express');

// TODO: Import 'terms.json' file
const termJson = require('term.json');
const PORT = 3001;

// TODO: Initialize app variable
const app = express();

// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get ('/', (req, res) => res.send ('Navigate to /json'))

app.get('/json', (req, res) =>
res.sendFile(path.join(__dirname, 'public/terms.json'))

);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
