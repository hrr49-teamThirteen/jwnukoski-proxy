const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');
const compression = require('compression');
<<<<<<< HEAD
=======


app.use(compression());
>>>>>>> c8b3d479c144a8f18c6ac7fba305a524941b8136

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(compression());
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));



app.get('/:item_id', (req, res) => {
  res.sendFile(`${PUBLIC_DIR}/index.html`);
});

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

module.exports = app;
