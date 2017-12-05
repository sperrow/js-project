const request = require('request');
const config = require('./config');

module.exports = (cb) => {
  const clientId = config.clientId;
  const clientSecret = config.clientSecret;

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
