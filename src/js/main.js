import Spotify from 'spotify-web-api-js';
import chart from './chart';
import ui from './ui';
const s = new Spotify();

let token;

$.ajax({
  url: '/token',
  success: function(response) {
    token = response;
    s.setAccessToken(token);
    query();
  }
});

const query = () => {
  s.getPlaylist('spotify', '37i9dQZEVXcNdoa7573QEq')
  .then(data => {
    console.log(data);
    let url = data.tracks.items[0].track.preview_url;
    const container = document.getElementById('results');
    getAudioFeaturesForTracks(data);
  });
};


const getAudioFeaturesForTracks = (obj) => {
  const trackIds = obj.tracks.items.map(track => {
    return track.track.id;
  });
  ui(obj.tracks.items);

  s.getAudioFeaturesForTracks(trackIds)
    .then(data => {
      chart(data);
    });
};
