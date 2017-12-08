const request = require('request');

let clientId;
let clientSecret;

if (process.env.CLIENT_ID) {
  clientId = process.env.CLIENT_ID;
  clientSecret = process.env.CLIENT_SECRET;
} else {
  const config = require('./config');
  clientId = config.clientId;
  clientSecret = config.clientSecret;
}

module.exports = (cb) => {

  // application requests authorization
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  return request.post(authOptions, cb);
};
