const spotifyAuth = require('./lib/spotify-auth');

const express = require('express'); // Express web server framework
const request = require('request'); // "Request" library
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.static(__dirname + '/'))
   .use(cookieParser());

let token;
let port = 8888;

if (process.env.PORT) {
  port = process.env.PORT;
}

spotifyAuth((err, resp, body) => {
  token = body.access_token;
  console.log(`Listening on ${port}`);
  app.listen(port);
});

app.get('/token', (req, res) => {
  res.send(token);
});
