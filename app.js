const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Spotify credentials
const client_id = 'a93a361accaf44238610c4a9c2555071';
const client_secret = '3e136e5a63544310876a11a729533239';

// PORT
const port = process.env.PORT || 4200;

// Express
const app = express();

// Middleware Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Static File
app.use('/', express.static(path.join(__dirname, 'public')));

// Requests Authorization
var authOptions = {
   url: 'https://accounts.spotify.com/api/token',
   headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
   },
   form: {
      grant_type: 'client_credentials'
   },
   json: true
};

// POST Request
app.get('/credentials', function (req, res) {
   request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode == 200) {
         res.json(body);
      }
   });
});

// Start Server
app.listen(port, () => {
   console.log('Servidor cargado en el puerto ' + port);
});